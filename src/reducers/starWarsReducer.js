import {
	/* we need our action types here DONE*/
	FETCH_CHARACTERS_START,
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_FAILURE
} from "../actions";
const initialState = {
	characters: [],
	fetching: false,
	error: null
	// Array characters, Boolean fetching, null error DONE.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Fill me in with the important reducers DONE
		// action types should be FETCHING, SUCCESS and FAILURE DONE
		// your switch statement should handle all of these cases. DONE
		case FETCH_CHARACTERS_START:
			return {
				...state,
				fetching: true
			};
		case FETCH_CHARACTERS_SUCCESS:
			return {
				...state,
				error: null,
				fetching: false,
				characters: action.payload
			};
		case FETCH_CHARACTERS_FAILURE:
			return {
				...state,
				fetching: false,
				error: action.payload
			};

		default:
			return state;
	}
};
