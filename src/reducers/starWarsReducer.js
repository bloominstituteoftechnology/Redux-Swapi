import { FETCHING_CHAR, FETCHING_CHAR_SUCC, FETCHING_CHAR_FAIL} from '../actions';

const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHAR: 
      return {...state, fetching: true}
    case FETCHING_CHAR_SUCC:
      return {...state, fetching: false, characters: [
        ...state.characters, ...action.payload
      ]}
    case FETCHING_CHAR_FAIL:
      return { ...state, fetching: false, err: action.payload}
    default:
      return state;
  }
};
