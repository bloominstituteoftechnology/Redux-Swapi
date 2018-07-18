import { FETCHING, FETCHED, ERRORS } '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {
        chars: [],
        fetching: true,
        fetched: false,
        error: null
      });
    case FETCHED:
      return Object.assign({}, state, {
        chars: action.payload,
        fetching: false,
        fetched: true,
        error: null
      });
    case ERRORS:
      return Object.assign({}, state, {
        chars: [],
        fetching: false,
        fetched: false,
        error: action.payload
      });
      }
    default:
      return state;
  }
};
