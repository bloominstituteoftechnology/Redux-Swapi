import {FETCHING_CHARACTERS, FETCHING_CHARACTERS_SUCCESS, FETCHING_CHARACTERS_FAILURE} from '../actions';
const initialState = {
  starWars: [],
  isFetching: false,
  error: null
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return {...state, isFetching: true}
    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        starWars: [...state.starWars, ...action.payload],
      }

    case FETCHING_CHARACTERS_FAILURE:
      return {...state, isFetching: false, error: action.payload}

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

