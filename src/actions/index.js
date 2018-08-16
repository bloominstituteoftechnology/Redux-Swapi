import axios from 'axios';
import { FETCHING, FETCHED, ERROR } from '../reducers/starWarsReducer';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const swapiAction = () => {
  return function(dispatch) {
    dispatch({type: FETCHING})
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      if (response === undefined) {
        dispatch({ type: ERROR, payload: response.error})
      } else {
        dispatch({ type: FETCHED, payload: response.data.results })
      }
    })
  }
}
