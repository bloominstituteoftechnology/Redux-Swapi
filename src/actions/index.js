// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const IS_FETCHING = "IS_FETCHING";
export const SUCCESSFULLY_FETCHED = "SUCCESSFULLY_FETCHED";
export const ERROR = "ERROR";

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based
export const fetch = () => {
  const promise = axios.get('https://swapi.co/api/people');
  return dispatch => {
    dispatch({ type: IS_FETCHING });
    promise 
      .then(response => {
        dispatch({ type: SUCCESSFULLY_FETCHED });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR });
      })
  }
  
}