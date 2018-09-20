import { FETCHING, FETCHED, ERROR } from "../actions";
const initialState = {
	char: [],
	fetching: false,
	fetched: false,
	error: null
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return Object.assign({}, state, { fetching: true });
		case FETCHED:
			return Object.assign({}, state, {
				char: [...state.char, ...action.payload],
				fetching: false,
				fetched: true
			});
		case ERROR:
			return Object.assign({}, state, {
				fetching: false,
				error: "Failed to fetch data..."
			});
		default:
			return state;
	}
};
