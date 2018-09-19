// Actions
import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
	chars: [],
	fetching: false,
	error: ''
	// define a few properties here.
	// Array chars, Boolean fetching, Boolean fetched, null error.
};

export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
	// Fill me in with the important reducers
	// action types should be FETCHING, FETCHED, and ERROR
	// your switch statement should handle all of these cases.
	case FETCHING: {
		return {...state, chars: [...state.chars], fetching: true};
	}
	case FETCH_SUCCESS: {
		return {...state, chars: action.payload, fetching: false, error: ''};
	}
	case FETCH_ERROR: {
		return {...state, chars: [...state.chars], fetching: false, error: 'Error fetching swapi people.'};
	}
	default:
		return state;
	}
};
