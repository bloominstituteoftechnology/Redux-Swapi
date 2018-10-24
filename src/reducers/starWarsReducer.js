import {FETCHING_CHARACTERS,FETCHING_CHARACTERS_SUCCESS,FETCHING_CHARACTERS_FAILURE} from '../actions';

const initialState = {
  characters:[],
  isFetching:false,
  Error:null,
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
    return { ...state,isFetching:true} 
    case FETCHING_CHARACTERS_SUCCESS:
    return {
      ...state,characters:action.payload
    }
    case FETCHING_CHARACTERS_FAILURE:
    return {
      ...state
    }
    default:
      return state;
  }
};
