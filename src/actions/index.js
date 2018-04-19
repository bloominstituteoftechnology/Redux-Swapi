// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_CHARS = "FETCHING_CHARS"; // fetching
export const CHAR_FETCH_SUCCESS = "CHAR_FETCH_SUCCESS"; // fetched
export const CHAR_FETCH_ERROR = "CHAR_FETCH_ERROR"; // error

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const asyncAction = () => {
  const promise = axios.get(`https://swapi.co/api/people/`)
  return dispatch => {
    dispatch({ type: FETCHING_CHARS }); // proc or dispatch first state of 'fetching'

    promise
      // 2nd state: success is dispatched if promise resolves
      .then(response => {
        dispatch({ type: CHAR_FETCH_SUCCESS, payload: response.data.message });
      })
      
      // alt 2nd state: reject is dispatched if promise does not go through.
      .catch(err => {
        console.log(err);
        dispatch({ type: CHAR_FETCH_ERROR });
      });
  };
};
