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
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_DATA :
      return {...state, fetching : true};
    case DATA_FETCH_SUCCESS :
      return {
        ...state, 
        fetching : false,
        characters : [...state.characters,...action.payload]
      }
    default:
      return state;
  }
};
