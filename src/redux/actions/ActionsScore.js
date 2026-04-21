export function add(score) {
    return { type: 'ADD_SCORE', payload: score };
}

export function remove(id) {
    return { type: 'REMOVE_SCORE', payload: id };
}
