import {DATA_FETCH_SUCCESS,DATA_FETCH_FAILURE,FETCH_DATA} from '../actions';
const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters : [],
  fetching : false,
  error : null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA :
      return {...state, fetching : true};
    case DATA_FETCH_SUCCESS :
      return {
        ...state, 
        fetching : false,
        characters : [...state.characters,...action.payload]
      }
      case DATA_FETCH_FAILURE : 
        return{...state, fetching : false, error : action.payload}
    default:
      return state;
  }
};
