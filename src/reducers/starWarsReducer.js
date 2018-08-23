// import /* we need our action types here*/ '../actions';
// const initialState = {
//   // define a few properties here.
//   // Array chars, Boolean fetching, Boolean fetched, null error.
// };
// export const charsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // Fill me in with the important reducers
//     // action types should be FETCHING, FETCHED, and ERROR
//     // your switch statement should handle all of these cases.
//     default:
//       return state;
//   }
// };


import { GET_CHARS, FETCHING_CHARS, ERROR_FETCHING_CHARS } from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  chars: [],
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return { ...state, fetching: true };
    case ERROR_FETCHING_CHARS:
      return { ...state, fetching: false, error: action.payload };
    case GET_CHARS:
      return ({
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true
      });
    default:
      return state;
  }
};
