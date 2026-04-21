export function add(course) {
    return { type: 'ADD_COURSE', payload: course };
}

export function remove(id) {
    return { type: 'REMOVE_COURSE', payload: id };
}
