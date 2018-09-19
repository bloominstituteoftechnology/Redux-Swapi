import /* we need our action types here*/ { 
  FETCHING_DATA, 
  FETCHING_ERROR, 
  FETCHED_DATA
} from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_DATA:
      return {
        ...state,
        fetching: true
      }

    case FETCHING_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case FETCHED_DATA:
      return {
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true
      }

    default:
      return state;
  }
};
