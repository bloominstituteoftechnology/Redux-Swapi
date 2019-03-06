import {FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error:'',
};
export const charsReducer = (state = initialState.characters, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    case FETCHING:
      return {
        ...state,
        fetching: true,
      }
    case SUCCESS: 
      return{
        ...state,
        fetching: false,
        characters: action.payload
      }

    case FAILURE:
    // console.log(action.payload);
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};
