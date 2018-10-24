import { axios } from 'axios'

export const FETCHING_CHARS = 'FETCHING_CHARS';
export const FETCHING_CHARS_SUCCESS = 'FETCHING_CHARS_SUCCESS';
export const FETCHING_CHARS_FAILURE = 'FETCHING_CHARS_FAILURE';

export const fetchCHARS = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_CHARS });
  axios
    .get('https://swapi.co/api/people')
    .then(response => {
      console.log(dispatch);
      dispatch({ type: FETCHING_CHARS_SUCCESS, payload: response.data.message });
    })
    .catch(error => {
      dispatch({ type: FETCHING_CHARS_FAILURE, payload: error });
    });
};

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator