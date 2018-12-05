import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
	characters: [],
	error: null,
	fetching: true,
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return {
				...state,
				fetching: true,
			};
		case SUCCESS:
			return {
				...state,
				characters: action.payload,
				error: false,
				fetching: false,
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      }
	
		default:
			return state;
	}
};
