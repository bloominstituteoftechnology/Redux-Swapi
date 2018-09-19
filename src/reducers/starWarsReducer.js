// Actions
import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
	chars: [],
	fetching: false,
	error: ''
};

export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
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
