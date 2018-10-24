import { FETCHING_STARWARS, FETCHING_STARWARS_SUCCESS, FETCHING_STARWARS_FAILURE } from '../actions';

const initialState = {
  starwarsChar: [], fetching: false, error: null
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STARWARS:
      return { ...state, fetching: true };

    case FETCHING_STARWARS_SUCCESS:
    console.log(action.payload);
      return {
        ...state,
        starwarsChar: [...state, ...action.payload],
        fetching: false
      };

    case FETCHING_STARWARS_FAILURE:
      return {
        ...state, fetching: false, error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
