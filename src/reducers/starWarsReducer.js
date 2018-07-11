import {FETCHING, FETCHED, ERROR} from  '../actions';

const initialState = {
	
	chars:[],
	fetching: false,
	fetched: false,
	error: null
};




export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
	case FETCHING:
	return Object.assign({}, state, {chars: action.names, fetching: true});

        case FETCHED:
       return Object.assign({}, state, {chars: action.names, fetching: false, fetched: true}); 

	case ERROR:
        return Object.assign({}, state, {error: true});

	default:
      	return state;
 
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
  }
};
