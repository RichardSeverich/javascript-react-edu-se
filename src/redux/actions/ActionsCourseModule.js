export function add(courseModule) {
    return { type: 'ADD_COURSE_MODULE', payload: courseModule };
}

export function remove(id) {
    return { type: 'REMOVE_COURSE_MODULE', payload: id };
}
