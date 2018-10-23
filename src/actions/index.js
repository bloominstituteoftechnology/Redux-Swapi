// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const GOT_DATA = 'GOT_DATA';
export const ERROR_DISPATCH = 'ERROR_DISPATCH';

export const fetchData = () => dispatch => {
  dispatch({ type: FETCHING_DATA });
  console.log('im logged');
  axios
    .get('https://swapi.co/api/people/')
    .then(res => dispatch({ type: GOT_DATA, payload: res.data.results }))
    .catch(err => dispatch({ type: ERROR_DISPATCH, payload: err }));
};
