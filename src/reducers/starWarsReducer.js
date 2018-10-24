import { FETCHING_MOVIE, FETCHING_MOVIE_SUCCESS, FETCHING_MOVIE_FAILED } from '../actions';

const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters:[],
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  console.log("beginning reducer", action.payload)
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_MOVIE: 
      return { ...state, isFetching: true }
    case FETCHING_MOVIE_SUCCESS:
    console.log("inside reducers payload", action.payload) 
      return { ...state,
             characters: [...state.characters, ...action.payload],
             isFetching: false
      }
    case FETCHING_MOVIE_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
