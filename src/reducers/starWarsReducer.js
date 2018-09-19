import {FETCHING,FETCHED,ERROR} from '../actions';

const initialState = {
    // define a few properties here.
    // Array chars, Boolean fetching, Boolean fetched, null error.
    chars: [],
    fetchingChars: false,
    error: ''
};

export const charsReducer = (state = initialState, action) => {
    switch (action.type) {
	// Fill me in with the important reducers
	// action types should be FETCHING, FETCHED, and ERROR
	// your switch statement should handle all of these cases.
    case FETCHING:
	return Object.assign({}, state, {fetchingChars: true});
    case FETCHED:
	return Object.assign({}, state, {
	    chars: [...state.chars, ...action.payload],
	    fetchingChars: false
	});
    case ERROR:
	return Object.assign({}, state, {
	    fetchingChars: false,
	    error: 'Error in the reducer!'
	});
    default:
	return state;
    }
};
