let initialState = {};
const reducer = (state = initialState, action) => {
    // state is array of courses
    switch (action.type) {
    case 'ADD_COURSE':
        state.push(action.payload);
        return state;
    case 'REMOVE_COURSE':
        return state.filter((element, index) => element._id !== action.payload);
    default:
        return state;
    }
};
export default reducer;
