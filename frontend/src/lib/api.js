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
 * @property {number} id
 * @property {string} title
 * @property {Date} release_date
 * @property {Actor[]} actors
 */


/**
 * Token obtained from the localStorage.
 */
const getToken =()=> localStorage.getItem('token');

/**
 * Http request to get All actors
 * @returns {Promise<Actor[]>} All the actors.
 */

export async function getAllActors() {
    const response = await fetch(`${DOMAIN}/actors`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
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
 * @param  {number} id The id of the actor to get it.
 * @returns {Promise<Actor>} The found actor.
 */
export async function getActor(id) {
    const response = await fetch(`${DOMAIN}/actors/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
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
 * @param {Actor} actor
 * @returns {Promise<object>}
 */
export async function addActor(actor) {
    const response = await fetch(DOMAIN + '/actors',
        {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
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
 * @param  {number} id The id of the actor to delete.
 * @returns {Promise<object>} A promise response information.
 */
export async function deleteActor(id) {
    const response = await fetch(DOMAIN + '/actors/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
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
 * @returns {Promise<Movie[]>} All the movies of the database.
 */
export async function getAllMovies() {
    const response = await fetch(DOMAIN + '/movies', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
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
 * @param  {number} id The id of the movie to get it.
 * @returns {Promise<Movie>} The movie.
 */
export async function getMovie(id) {
    const response = await fetch(`${DOMAIN}/movies/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
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
 * @param  {number} id The id of the movie to delete.
 * @returns {Promise<object>} A promise response information.
 */
export async function deleteMovie(id) {
    const response = await fetch(DOMAIN + '/movies/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
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
 * @param {Movie} movie. The movie to save.
 * @returns {Promise<Object>} The response.
 */
export async function addMovie(movie) {
    const response = await fetch(`${DOMAIN}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
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
 * @param {string} id_user the id of the user
 * @returns {Promise<Object>} The response.
 */
export async function getUserRole(id_user) {
    const response = await fetch(`${DOMAIN}/users/${id_user}/role`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        }
    );

    const jsonResponse = await response.json();
    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't get user role`);
    }
    return jsonResponse;
}