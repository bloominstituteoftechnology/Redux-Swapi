
import {FETCH, SUCCESS, FAIL} from '../actions/index'
const initialState = {
  characters: [],
  fetch: false,
  fail:""

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
    return Object.assign({},state,{fetch:true,characters:[],fail:""})
    case SUCCESS:
    return {...state,fetch:false,characters:action.payload,error:""}
    case FAIL:
    return {...state, fetch:false,characters:[], error: action.payload}
    default:
    return state;
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    
  }
};
