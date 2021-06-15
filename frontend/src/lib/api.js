const DOMAIN = 'http://localhost:5000';

export async function getAllActors() {
    const response = await fetch(`${DOMAIN}/actors`);
    const jsonResponse = await response.json();
    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || 'Could not fetch Actors');
    }
    return jsonResponse.actors;
}

export async function getActor(id){
    const response = await fetch(`${DOMAIN}/actor/${id}`);
    const jsonResponse = await response.json();
    if(!jsonResponse.success){
        throw new Error(jsonResponse.message || `Coudln't fetch Actor`);
    }
    return jsonResponse.actor;
}

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

export async function getAllMovies() {
    const response = await fetch(DOMAIN + '/movies');
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || 'Could not fetch Movies');
    }
    return jsonResponse.movies;
}

export async function getMovie(id){
    const response = await fetch(`${DOMAIN}/movies/${id}`);
    const jsonResponse = await response.json();

    if(!jsonResponse.success){
        throw new Error(jsonResponse.message || `Coudln't fetch Actor`);
    }
    return jsonResponse.movie;
}

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