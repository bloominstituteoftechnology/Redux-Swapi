import { FETCHING_FRIENDS, FRIENDS_SUCCESS, FRIENDS_ERR } from '../actions';
const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS: 
    return {...state, isFetching: true}
    case FRIENDS_SUCCESS: 
    return  {...state, isFetching: false, characters: [...state.characters, ...action.payload ]}
    case FRIENDS_ERR: 
    return {...state, isFetching: false, error: action.payload}
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.


    default:
      return state;
  }
};
