import { FETCHING, SUCCESS, FAILURE } from '../actions';
const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [
    {
      name: 'joe'
    },
    {
      name: 'luke'
    }
  ],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return state
    case SUCCESS:
      return {
        ...state,
        characters: action.data.results
      }; 
    case FAILURE:
      return action.err;
    default:
      return state;
  }
};
