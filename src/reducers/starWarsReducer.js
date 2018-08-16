import { fetching, fetched, error } from '../actions';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const initialState = {
  characters: [],
  fetching: false,
  fetched: false,
  error: null
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetching: true,
      })

      case FETCHED:
        return Object.assign({}, state, {
          fetching: false,
          fetched: true,
          characters: action.payload
        })

        case ERROR:
          return Object.assign({}, state, {
            error: "Oops! Something went wrong!"
          })
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
