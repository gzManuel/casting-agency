const DOMAIN = 'http://localhost:5000';
/**
 * @typedef {object} Actor
 * @property {number} id
 * @property {string} name
 * @property {string} gender
 * @property {Movie[]} movies
 */

/**
 * @typedef {object} Movie
 * @property {string} title
 * @property {Date} release_date
 * @property {Actor[]} actors
 */

/**
 * Http request to get All actors
 * @param {string} token Token of the user
 * @returns {Promise<Actor[]>} All the actors.
 */
export async function getAllActors(token) {
    const response = await fetch(`${DOMAIN}/actors`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const jsonResponse = await response.json();
    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || 'Could not fetch Actors');
    }
    return jsonResponse.actors;
}

/**
 * Http request to get an actor with the given id parameter
 * @param {string} token Token of the user
 * @param  {number} id The id of the actor to get it.
 * @returns {Promise<Actor>} The found actor.
 */
export async function getActor(token, id) {
    const response = await fetch(`${DOMAIN}/actors/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const jsonResponse = await response.json();
    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't fetch Actor`);
    }
    return jsonResponse.actor;
}
/**
 * Save an actor in the database.
 * @param {string} token Token of the user
 * @param {Actor} actor
 * @returns {Promise<object>}
 */
export async function addActor(token, actor) {
    const response = await fetch(DOMAIN + '/actors',
        {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(actor)
        });
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't add Actor`);
    }
    return jsonResponse;
}

/**
 * Delete an Actor row in the database with the given id parameter.
 * @param {string} token Token of the user
 * @param  {number} id The id of the actor to delete.
 * @returns {Promise<object>} A promise response information.
 */
export async function deleteActor(token, id) {
    const response = await fetch(DOMAIN + '/actors/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't not delete Actor`);
    }
    return jsonResponse;
}
/**
 * Http request to get All movies
 * @param {string} token Token of the user
 * @returns {Promise<Movie[]>} All the movies of the database.
 */
export async function getAllMovies(token) {
    const response = await fetch(DOMAIN + '/movies', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || 'Could not fetch Movies');
    }
    return jsonResponse.movies;
}

/**
 * Http request to get a movie with the given id parameter
 * @param {string} token Token of the user
 * @param  {number} id The id of the movie to get it.
 * @returns {Promise<Movie>} The movie.
 */
export async function getMovie(token, id) {
    const response = await fetch(`${DOMAIN}/movies/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't fetch Movie`);
    }
    return jsonResponse.movie;
}
/**
 * Delete an Movie row in the database with the given id parameter.
 * @param {string} token Token of the user
 * @param  {number} id The id of the movie to delete.
 * @returns {Promise<object>} A promise response information.
 */
export async function deleteMovie(token, id) {
    const response = await fetch(DOMAIN + '/movies/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't not delete Movie`);
    }
    return jsonResponse;
}

/**
 * Save a movie in the database.
 * @param {string} token Token of the user
 * @param {Movie} movie. The movie to save.
 * @returns {Promise<Object>} The response.
 */
export async function addMovie(token, movie) {
    const response = await fetch(`${DOMAIN}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(movie)
    });
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't add Movie`);
    }
    return jsonResponse;
}

/**
 * get rol from a user.
 * @param {string} token Token of the user 
 * @param {string} id_user the id of the user
 * @returns {Promise<Object>} The response.
 */
export async function getUserRole(token, id_user) {
    const response = await fetch(`${DOMAIN}/users/${id_user}/role`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    );

    const jsonResponse = await response.json();
    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't get user role`);
    }
    return jsonResponse;
}