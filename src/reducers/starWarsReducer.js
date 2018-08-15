import { REQUEST_FETCHING, REQUEST_SUCCESS, REQUEST_FAILURE } from '../actions';

const initialState = {
  // define a few properties here.
  characters: [],
  isFetching: false,
  fetched: false,
  errors: null
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    case REQUEST_FETCHING:
      return Object.assign({}, state, {isFetching:true} );
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        fetched:true,
        isFetching:false});
    case REQUEST_FAILURE:
        return Object.assign({}, state, {
          fetched: false,
          isFetching:false,
          errors: [...state.errors, action.payload.errors]
        })

    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
