import /* we need our action types here*/ '../actions';
const initialState = {

    chars: [],
    fetching: false,
    fetched: true,
    error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
      case FETCHING_CHARS:
        return {...state, fetching:true};
      case GET_CHARS:
        return {...state, chars: action.payload, fetching: false, fetched: true};
    default:
      return state;
  }
};
