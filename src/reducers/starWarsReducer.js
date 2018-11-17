/* we need our action types here*/ 
import { 
	FETCHING_CHARS, 
	ERROR_FETCHING_CHARS, 
	CHARS_FETCHED 
} from "../actions";

// Array characters, Boolean fetching, null error.
const initialState = {
  characters: [],
  error: null,
  fetching: false,
  fetched: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
    	return Object.assign({}, state, { fecthing: true });
    case ERROR_FETCHING_CHARS:
    	return Object.assign({}, state, { 
    		fecthing: false, 
    		error: action.payload 
    	});
    case CHARS_FETCHED:
    	return Object.assign({}, state, { 
    		fecthing: false, 
    		fetched: true,
    		characters: [...state.characters, ...action.payload] //always add previous material with new material
    	});
    default:
      return state;
  }
};

//can achieve the same thing using spread opeator. Ryan used Object.assign because it is easier to see when teaching