import { FETCHING_STARWARS, STARWARS_FETCH_SUCCESS, STARWARS_FETCH_ERROR } from '../actions';



const initialState = {
  chars: [], fetching: false, error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
  	case FETCHING_STARWARS:
  		return Object.assign({}, state, {fetching: true});
  	case STARWARS_FETCH_SUCCESS:
  		return Object.assign({}, state, {
  			chars: action.payload,
  			fetching: false
  		});
  	case STARWARS_FETCH_ERROR:
  		return Object.assign({}, state, {
  			fetching: false,
  			error: "Error fetching starwars",
  		});
    default:
    	return state;
  }
}
