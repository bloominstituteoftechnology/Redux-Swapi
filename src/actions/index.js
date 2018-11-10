import axios from 'axios';
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const FETCHING_CHARS_SUCCESS = 'FETCHING_CHARS_SUCCESS';
export const FETCHING_CHARS_FAILURE = 'FETCHING_CHARS_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const fetchChars = () => dispatch => {
  dispatch({ type: FETCHING_CHARS });
  axios.get('https://swapi.co/api/people/')
    .then(response => {
      console.log('res', response)
      dispatch({ type: FETCHING_CHARS_SUCCESS, payload: response.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCHING_CHARS_FAILURE, payload: err });
    })
}