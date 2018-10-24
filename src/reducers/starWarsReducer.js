import {FETCHING_CHARACTERS, FETCHING_CHARACTERS_SUCCESS, FETCHING_CHARACTERS_ERROR} from '../actions';
const initialState = {
  characters: [{name: 'sop'}],
  isFetching: false,
  error: ''
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
   case FETCHING_CHARACTERS: 
   return {...state, isFetching: true}
   case FETCHING_CHARACTERS_SUCCESS: 
   return {...state, characters: [...state.characters, ...action.payload], isFetching: false}
   case FETCHING_CHARACTERS_ERROR:
   return {...state, isFetching: false, error: action.payload}
    default:
      return state;
  }
};

// case DOG_FETCH_SUCCESS:
// return Object.assign({}, state, {
//   dogs: [...state.dogs, ...action.payload],
//   fetchingDogs: false 
// });