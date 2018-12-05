import { REQUEST_DATA, REQUEST_SUCCESS, REQUEST_ERROR } from '../actions';
const initialState = {
	characters: [],
	error: null,
	requesting: false
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_DATA:
			return {
				...state,
				requesting: true
			};
		case REQUEST_SUCCESS:
			return {
				...state,
				error: null,
				requesting: false,
				characters: action.payload
			};
		case REQUEST_ERROR:
			return {
				...state,
				requesting: false,
				error: action.payload
			};
		default:
			return state;
	}
};
