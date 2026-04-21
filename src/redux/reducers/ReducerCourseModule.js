let initialState = {};
const reducer = (state = initialState, action) => {
    // state is array of courseModules
    switch (action.type) {
    case 'ADD_COURSE_MODULE':
        state.push(action.payload);
        return state;
    case 'REMOVE_COURSE_MODULE':
        return state.filter((element, index) => element._id !== action.payload);
    default:
        return state;
    }
};
export default reducer;
