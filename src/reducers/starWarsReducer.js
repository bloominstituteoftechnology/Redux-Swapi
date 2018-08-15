import { FETCHING, SUCCESS, FAILURE } from '../actions';

const initialState = {
  chars: [],
  isFetching: false,
  hasErrors: false
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case SUCCESS:
        //console.log(action.payload)
      return Object.assign({}, state, {
        chars: action.payload,
        isFetching: false,
      });
    case FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        hasErrors: true
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
