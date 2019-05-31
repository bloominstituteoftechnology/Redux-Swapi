// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios'
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';


export function getChars() {
  return function (dispatch) {
    dispatch({ type: FETCHING_START });
    axios
      .get('https://swapi.co/api/people')
      .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: FETCHING_FAILURE, payload: err }))
  }
};
