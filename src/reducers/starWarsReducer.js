import {FETCHING, FETCHED, ERRORS} from '../actions/index';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  isFetching: false,
  hasFetched: false,
  errors: [],
  hasErrors: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        isFetching: true,
      };
      case FETCHED:
        return {
          ...state,
          isFetching: false,
          hasFetched: true,
          chars: action.payload.results,
        };
      case ERRORS:
        return {
          ...state,
          isFetching: false,
          erros: [...state.errors],
          hasErrors: true,
        }
    default:
      return state;
  }
};
