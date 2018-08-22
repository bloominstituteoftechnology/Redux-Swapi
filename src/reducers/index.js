// import { combineReducers } from 'redux';
// import { charsReducer } from './starWarsReducer';

// export default combineReducers({
//   charsReducer
// });


import { FETCHING, FETCHED, ERROR} from '../actions';

const initialState = {
  chars: [],
  fetching: false, 
  error: null
};


export default (state = initialState, action) => {
switch(action.type) {
case FETCHING:
return { ...state, fetching: true}
case ERROR:
return {...state, error: action.errorMessage}
  case FETCHED:
    return { ...state, chars: action.chars, fetching: false, error: null}// if you don't change it will never display the fetched data
  default:
    return state
}
}
