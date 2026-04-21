export function add(user) {
    return { type: 'ADD_USER', payload: user };
}

export function remove(id) {
    return { type: 'REMOVE_USER', payload: id };
}
