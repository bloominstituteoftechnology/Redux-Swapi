import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

const starWars = () => {
  return ({
    chars: [],
    error: null,
    fetching: false,
    fetched: false
  })
}

export default combineReducers({
  chars: starWars
});
