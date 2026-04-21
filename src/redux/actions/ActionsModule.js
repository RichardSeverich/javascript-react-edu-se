export function add(module) {
    return { type: 'ADD_MODULE', payload: module };
}

export function remove(id) {
    return { type: 'REMOVE_MODULE', payload: id };
}
