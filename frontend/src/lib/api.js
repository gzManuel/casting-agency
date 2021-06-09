const DOMAIN = 'http://localhost:5000';

export async function getAllActors() {
    const response = await fetch(`${DOMAIN}/actors`);
    const jsonResponse = await response.json();
    if (!jsonResponse.success) {
        throw new Error(jsonResponse.message || 'Could not fetch Actors');
    }
    return jsonResponse.actors;
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
    const response = await fetch(DOMAIN+'/movies');
    const jsonResponse = await response.json();
    
    if(!jsonResponse.success){
        throw new Error(jsonResponse.message||'Could not fetch Movies');
    }
    return jsonResponse.movies;
}
export async function deleteMovie(id){
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