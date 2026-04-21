let initialState = {};
const reducer = (state = initialState, action) => {
    // state is array of scores
    switch (action.type) {
    case 'ADD_SCORE':
        state.push(action.payload);
        return state;
    case 'REMOVE_SCORE':
        return state.filter((element, index) => element._id !== action.payload);
    default:
        return state;
    }
};
export default reducer;
