import /* we need our action types here*/ {
   FETCHING, 
   FETCHED, 
   ERROR 
} from '../actions/index';

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
      case FETCHING:
        return Object.assign({}, state, { fetching: true, fetched: false, error: null });
      case FETCHED:
        console.log('fetched: ', action.payload)
        return {...state, 
          chars: action.payload, 
          fetched: true,
          fetching: false};
      case ERROR:
          return Object.assign({}, state, { error: action.payload })
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};