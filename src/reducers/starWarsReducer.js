import { FETCHING_CHAR, FETCHING_CHAR_SUCCESS, FETCHING_CHAR_FAILURE } from '../actions';

const initialState = {
	characters: [],
	isFetching: false,
	error: null
	// define a few properties here.
	// Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_CHAR:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_CHAR_SUCCESS:
			return {
				...state,
				isFetching: false,
				characters: [ ...state.characters, ...action.payload ]
			};
		case FETCHING_CHAR_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		default:
			return state;
	}
};
