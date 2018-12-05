// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const SWAPI_REQUEST = 'SWAPI_REQUEST';
export const SWAPI_SUCCESS = 'SWAPI_SUCCESS';
export const SWAPI_FAILURE = 'SWAPI_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
const URL = `https://swapi.co/api/people/`;

export const fetchSwapi = () => dispatch => {
  dispatch({type: SWAPI_REQUEST});

  axios
    .get(URL)
    .then( res => {
      dispatch({type: SWAPI_SUCCESS, payload: res.data.results})
    })
    .catch( err => {
      dispatch({type: SWAPI_FAILURE, payload: err})
    });
};