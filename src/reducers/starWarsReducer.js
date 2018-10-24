import { FETCHING, SUCCESS, FAILURE } from '../actions'



const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characaters: [],
  fetching: false,
  success: false, // ************************* success isn't in codesandbox *************************
  failure: null
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: 
      return { ...state, fetching: true }

    case SUCCESS: 
      return { ...state, characters: action.characters, fetching: false }

    case FAILURE:
      return { ...state, error: action.error}

    default:
      return state
  }
}