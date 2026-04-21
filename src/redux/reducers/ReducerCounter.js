const reducer = (state = 0, action) => {
    switch (action.type) {
    /*case "INCREMENT":
      return {
        ...state, //preserve current state, apply changes to it below
        counter: state + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state - 1
      };
    case "RESET":
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }*/
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    case 'RESET':
        return 0;
    default:
        return state;
    }
};
export default reducer;
