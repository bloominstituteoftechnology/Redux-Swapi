// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

import axios from 'axios';
export const FETCH_AVENGERS = 'FETCH_AVENGERS';
export const FETCHING_AVENGERS = 'FETCHING_AVENGERS';

export const fetchAvengers = () => {
  const getAvengers = axios.get('https://swapi.co/api/people/');
  return function(dispatch) {
    dispatch({ type: FETCHING_AVENGERS });
    getAvengers
      .then(someData => {
        dispatch({ type: FETCH_AVENGERS, payload: someData.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};