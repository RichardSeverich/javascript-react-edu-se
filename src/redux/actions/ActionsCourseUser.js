export function add(courseUser) {
    return { type: 'ADD_COURSE_USER', payload: courseUser };
}

export function remove(id) {
    return { type: 'REMOVE_COURSE_USER', payload: id };
}
