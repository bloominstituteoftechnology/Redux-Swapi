import { FETCHING_PEEPS, FETCHED_PEEPS, FETCH_ERROR } from '../actions';
const initialState = {
	// define a few properties here.
	// Array chars, Boolean fetching, Boolean fetched, null error.
	chars: [],
	fetchingCharacters: false,
	fetchedCharacters: false,
	error: null,
};

export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Fill me in with the important reducers
		// action types should be FETCHING, FETCHED, and ERROR
		// your switch statement should handle all of these cases.

		case FETCHING_PEEPS:
			return { ...state, fetchingCharacters: true };

		case FETCHED_PEEPS:
			return { ...state, chars: action.payload, fetchingCharacters: false };

		case FETCH_ERROR:
			return {
				...state,
				fetchingCharacters: false,
				error: 'Error fetching Star Wars peeps.',
			};

		default:
			return state;
	}
};
