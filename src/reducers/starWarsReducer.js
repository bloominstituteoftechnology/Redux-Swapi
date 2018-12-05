import {FETCHING,RESP_SUCCESS,RESP_FAILURE} from "../actions";

const initialState = {
  characters: [],
  error:null,
  fetching:false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {...state,fetching:true}
    case RESP_SUCCESS:
      return {...state,characters:[...state.characters,...action.payload],fetching:false}
    case RESP_FAILURE:
      return {...state, error:action.payload, fetching:false}
    default:
      return state;
  }
};
