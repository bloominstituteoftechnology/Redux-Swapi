import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_FAILURE,
  FETCHING_FRIENDS_SUCCESS
} from '../actions';

const initialState = {
  characters: [],
  fetching: false,
  error: '',
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS : return {...state, fetching: true}
    case FETCHING_FRIENDS_FAILURE : return {...state, fetching: false, error: action.payload }
    case FETCHING_FRIENDS_SUCCESS : 
      return {
        ...state, 
        fetching: false,
        characters: [...action.payload]
      }
    default:
      return state;
  }
};
