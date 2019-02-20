import { FETCHING, SUCCESS, ERROR } from '../actions';
const initialState = {
	characters: [],
	fetching: false,
	error: ''
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return { ...state, fetching: true };
		case SUCCESS:
			return { ...state, fetching: false, characters: action.payload };
		case ERROR:
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		default:
			return state;
	}
};
