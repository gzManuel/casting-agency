import json
import http.client
import os
from flask import (
    Flask,
    request,
    abort,
    jsonify,
    abort,
    render_template,
    redirect
)
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy.orm import exc
from sqlalchemy.sql.expression import true
from models import setup_db, Movie, Actor
from auth import AuthError, requires_auth


def create_app(test_config=None):
    # Create and configure the app

    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    # Routes
    @app.route('/actors')
    @requires_auth('get:actors')
    def get_actors(jwt):
        # Getting actors from database
        actors = Actor.query.all()
        # Using list comprehension
        actors_list = [actor.format() for actor in actors]

        return jsonify({
            'success': True,
            'actors': actors_list
        })

    @app.route('/actors/<int:id>')
    @requires_auth('get:actor')
    def get_actor(jwt, id):
        actor = Actor.query.filter_by(id=id).one_or_none()
        # Resource not found
        if actor is None:
            abort(404)
        return jsonify({
            'success': True,
            'actor': actor.format_more_detail()
        })

    @app.route('/movies')
    @requires_auth('get:movies')
    def get_movies(jwt):
        # Getting movies from database
        movies = Movie.query.all()
        # Using list comprehension
        movies_list = [movie.format() for movie in movies]

        return jsonify({
            'success': True,
            'movies': movies_list
        })

    @app.route('/movies/<int:id>')
    @requires_auth('get:movie')
    def get_movie(jwt, id):
        movie = Movie.query.filter_by(id=id).one_or_none()
        # Resource not found
        if movie is None:
            abort(404)

        return jsonify({
            'success': True,
            'movie': movie.format_more_detail()
        })

    @app.route('/actors', methods=['POST'])
    @requires_auth('post:actor')
    def create_actor(jwt):
        # Getting json data
        name = request.json.get('name')
        gender = request.json.get('gender')
        # Movie ids example = [1,2]
        movies = request.json.get('movies')

        # If name or gender have null data abort()
        if name is None or gender is None:
            abort(400)  # Bad request.
        try:
            actor = Actor(name=name, gender=gender)
            movie_list = []
            # If there aren't movies, just add empty list []
            # to actor.movie
            if movies is not None:
                # Running the movies and adding to movie_list
                for id in movies:
                    # Getting movie with the movie id
                    movie = Movie.query.filter_by(id=id).one_or_none()
                    movie_list.append(movie)

            actor.movies = movie_list
            actor.insert()

            return jsonify({
                'success': True,
                'created': actor.id
            })
        except exc.FlushError:
            abort(422)  # Unprocesable entity

    @app.route('/movies', methods=['POST'])
    @requires_auth('post:movie')
    def create_movie(jwt):
        # Getting json data
        title = request.json.get('title')
        release_date = request.json.get('release_date')
        actors = request.json.get('actors')

        # If title is none or release_date is none abort()
        if title is None or release_date is None:
            abort(400)
        try:
            movie = Movie(title=title, release_date=release_date)
            actor_list = []
            # Adding actors to movie if there is actors in json request
            if actors is not None:
                # going through actors and adding adctors to actor_list
                for id in actors:
                    # Getting actor with id
                    actor = Actor.query.filter_by(id=id).one_or_none()
                    actor_list.append(actor)

            movie.actors = actor_list
            movie.insert()

            return jsonify({
                'success': True,
                'created': movie.id
            })
        except exc.FlushError:
            abort(422)

    @app.route('/movies/<int:id>', methods=['DELETE'])
    @requires_auth('delete:movie')
    def delete_movie(jwt, id):
        movie = Movie.query.filter_by(id=id).one_or_none()
        # if there is not movie with id abort
        if movie is None:
            abort(404)

        movie.delete()
        return jsonify({
            'success': True,
            'deleted': id
        })

    @app.route('/actors/<int:id>', methods=['DELETE'])
    @requires_auth('delete:actor')
    def delete_actor(jwt, id):
        actor = Actor.query.filter_by(id=id).one_or_none()
        # If there is not actor abort.
        if actor is None:
            abort(404)

        actor.delete()
        return jsonify({
            'success': True,
            'deleted': id
        })

    def get_actors_by_ids(actors_id_list):
        actor_list = []

        for id in actors_id_list:
            actor = Actor.query.filter_by(id=id).one_or_none()
            actor_list.append(actor)

        return actor_list

    @app.route('/movies/<int:id>/update', methods=['PATCH'])
    @requires_auth('patch:movie')
    def update_movie(jwt, id):
        # Getting movie with id
        movie = Movie.query.filter_by(id=id).one_or_none()
        # If there is not movie, abort()
        if movie is None:
            abort(404)

        # Getting json data to update movie.
        if(request.json == None):
            abort(400)

        json = request.json
        title = json.get('title')
        release_date = json.get('release_date')
        actors = json.get('actors')

        if title is None and release_date is None and actors is None:
            abort(400)
        try:
            # If there is title, add to movie.title
            if title is not None:
                movie.title = title
            # If there is release_date, add movie.release_date
            if release_date is not None:
                movie.release_date = release_date
            # If there is actors, utilize get_actors_by_ids(idActor)
            # to get Actor
            if actors is not None:
                movie.actors = get_actors_by_ids(actors)  # List

            movie.update()
            return jsonify({
                'success': True,
                'movie': movie.format()
            })
        except exc.FlushError:
            abort(422)
    # function to get movies with a list of ids

    def get_movies_by_ids(movies_id_list):
        movie_list = []
        # Go through list of ids and get the movie with the id and add it.
        for id in movies_id_list:
            movie = Movie.query.filter_by(id=id).one_or_none()
            movie_list.append(movie)

        return movie_list

    @app.route('/actors/<int:id>/update', methods=['PATCH'])
    @requires_auth('patch:actor')
    def update_actor(jwt, id):
        actor = Actor.query.filter_by(id=id).one_or_none()
        # If there is not actor to be updated, abort().
        if actor is None:
            abort(404)

        # Getting the atributes data to update the actor.
        if(request.json == None):
            abort(400)

        json = request.json
        name = json.get('name')
        gender = json.get('gender')
        movies = json.get('movies')

        # If didn't send any atribute data to update, abort().
        if name is None and gender is None and movies is None:
            abort(400)
        try:
            if name is not None:
                actor.name = name

            if gender is not None:
                actor.gender = gender

            if movies is not None:
                actor.movies = get_movies_by_ids(movies)

            actor.update()
            return jsonify({
                'success': True,
                'actor': actor.format()
            })
        except exc.FlushError:
            abort(422)

    # Function to get management api token
    # TODO: Improve the payload format.
    def get_management_token():
        conn = http.client.HTTPSConnection("casting-agency-bo.us.auth0.com")
        client_id = 'siwBohtxDLLO1esorYtzYw8R59ESxRwK'
        client_secret = 'xhOimeIqbX-xa6pEMfmy2VLdquw7yOa3ZzntRSsuSxOJyCjzCK-mmPr3chQg9pwW'
        audience = 'https://casting-agency-bo.us.auth0.com/api/v2/'
        grant_type = 'client_credentials'
        # print(payload)
        payload = {
            'client_id': client_id,
            'client_secret': client_secret,
            'audience': audience,
            'grant_type': grant_type
        }

        headers = {'content-type': "application/json"}
        conn.request("POST", "/oauth/token", json.dumps(payload), headers)
        res = conn.getresponse()
        data = res.read()
        # Transformin the response into a dictionary.
        dictionary_data = json.loads(data)

        return dictionary_data['access_token']

    # TODO: add documentation of this api
    @app.route('/users/<string:id_user>/role')
    @requires_auth('get:user_role')
    def get_user_role(jwt, id_user):
        management_token = get_management_token()
        conn = http.client.HTTPSConnection("casting-agency-bo.us.auth0.com")
        headers = {'authorization': "Bearer {token}".format(
            token=management_token)}
        conn.request(
            "GET", "/api/v2/users/{id}/roles".format(id=id_user),
            headers=headers)
        res = conn.getresponse()
        data = res.read()

        dictionary_data = json.loads(data)
        return jsonify({
            'success': 'true',
            'role': dictionary_data[0]['name']
        })

    # Error handling.
    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            'success': False,
            'error': 400,
            'message': 'bad request'  # Syntaxis error
        }), 400

    @app.errorhandler(404)
    def resource_not_found(error):
        return jsonify({
            'success': False,
            'error': 404,
            'message': 'resource not found'
        }), 404

    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({
            'success': False,
            'error': 405,
            'message': 'method not allowed'
        }), 405

    @app.errorhandler(422)
    def unprocessable(error):
        return jsonify({
            'success': False,
            'error': 422,
            'message': 'unprocessable'  # Semantic error
        }), 422

    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify({
            'success': False,
            'error': 500,
            'message': 'internal server error'
        }), 500

    # Error handling for authentication.
    @app.errorhandler(AuthError)
    def handle_auth_error(ex):
        response = jsonify(ex.error)
        response.status_code = ex.status_code
        return response
    return app


app = create_app()

if __name__ == '__main__':
    app.run()
