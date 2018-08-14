// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCH_CHARS_REQUEST = 'FETCH_CHARS_REQUEST';
export const FETCH_CHARS_SUCCESS = 'FETCH_CHARS_SUCCESS';
export const FETCH_CHARS_FAILURE = 'FETCH_CHARS_FAILURE';

const API_URL = 'https://swapi.co/api/people/';
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchChars = () => async dispatch => {
  dispatch({ type: FETCH_CHARS_REQUEST });

  try {
    let response = await axios.get(API_URL);
    dispatch({ type: FETCH_CHARS_SUCCESS, payload: response.data.results });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_CHARS_FAILURE, payload: err });
  }
};
