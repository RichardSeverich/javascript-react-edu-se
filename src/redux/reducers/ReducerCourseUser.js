let initialState = {};
const reducer = (state = initialState, action) => {
    // state is array of courseUser
    switch (action.type) {
    case 'ADD_COURSE_USER':
        state.push(action.payload);
        return state;
    case 'REMOVE_COURSE_USER':
        return state.filter((element, index) => element._id !== action.payload);
    default:
        return state;
    }
};
export default reducer;
