import { FETCHING_STARWARS, FETCHING_STARWARS_SUCCESS, FETCHING_STARWARS_FAILURE } from '../actions';

const initialState = {
  starwarsChar: [], fetching: false, error: null
 
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
    
    default:
      return state;
  }
};
