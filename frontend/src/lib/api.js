const DOMAIN = 'http://localhost:5000';

/**
 * Http request to get All actors
 * @returns A promise array of actor objects.
 */
export async function getAllActors() {
    const response = await fetch(`${DOMAIN}/actors`);
    const jsonResponse = await response.json();
    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || 'Could not fetch Actors');
    }
    return jsonResponse.actors;
}

/**
 * Http request to get an actor with the given id parameter
 * @param  {number} id The id of the actor to get it.
 * @returns A promise actor object
 */
export async function getActor(id){
    const response = await fetch(`${DOMAIN}/actors/${id}`);
    const jsonResponse = await response.json();
    if(!jsonResponse.success){
        throw new Error(jsonResponse.message || `Couldn't fetch Actor`);
    }
    return jsonResponse.actor;
}
/**
 * Save an actor in the database.
 * @param {object} actor this is a json object that has the following keys:
 * ```JSON
 *{
 *  name:<string>,
 *  gender:<string>
 *}
 * ```
 * @returns A promise response object
 */
 export async function addActor(actor) {
    const response = await fetch(DOMAIN + '/actors',
        {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
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
 * @returns A promise response information.
 */
export async function deleteActor(id) {
    const response = await fetch(DOMAIN + '/actors/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
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
 * @returns A promise array of movie objects.
 */
export async function getAllMovies() {
    const response = await fetch(DOMAIN + '/movies');
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || 'Could not fetch Movies');
    }
    return jsonResponse.movies;
}

/**
 * Http request to get a movie with the given id parameter
 * @param  {number} id The id of the movie to get it.
 * @returns A promise movie object
 */
export async function getMovie(id){
    const response = await fetch(`${DOMAIN}/movies/${id}`);
    const jsonResponse = await response.json();

    if(!jsonResponse.success){
        throw new Error(jsonResponse.message || `Couldn't fetch Movie`);
    }
    return jsonResponse.movie;
}
/**
 * Delete an Movie row in the database with the given id parameter.
 * @param  {number} id The id of the movie to delete.
 * @returns A promise response information.
 */
export async function deleteMovie(id) {
    const response = await fetch(DOMAIN + '/movies/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
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
 * @param {object} movie a json object with the following information
 * ```JSON
 *  {
        title:<string>,
        release_date:<Date>
    }
 * ``` 
 */
export async function addMovie(movie) {
    const response = await fetch(`${DOMAIN}/movies`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    });
    const jsonResponse = await response.json();

    if (jsonResponse.success) {
        throw new Error(jsonResponse.message || `Couldn't add Movie`);
    }
}