import { FETCHING, FETCHED, ERROR} from '../actions';

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
    case FETCHED:
    console.log("fetched ", action.payload);
      return Object.assign({}, state, {
        chars: action.payload,
        fetched: true,
        fetching: false
      });
    case FETCHING:
    console.log("fetching ", action.payload);
      return Object.assign({}, state, { fetching: true });
    case ERROR:
    console.log("error ", action.payload);
      return Object.assign( {}, state, { fetched: false, fetching: false, error: action.payload } );
    default:
      return state;
    }
};

