// we'll need axios
import React from  'react';
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const FETCHING_STARCHARS = 'FETCHING_STARCHARS';
export const STARCHAR_FETCH_SUCCESS = 'STARCHAR_FETCH_SUCCESS';
export const STACHAR_FETCH_ERROR = 'STARCHAR_FETCH_ERROR';
// Those three types above are all a representation of our State Machine
// fetching, resolve, reject... etc. : ) Start to notice this pattern. You'll use it constantly in redux!

export const fetchDogs = () => {
  // let's do some async stuff! Thanks react-thunk :)
  return dispatch => {
    dispatch({ type: FETCHING_STARCHARS });
    axios
      .get('https://swapi.co/api/people')
      .then(response => {
        dispatch({ type:STARCHAR_FETCH_SUCCESS, payload: response.data.message });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type:STARCHAR_FETCH_ERROR });
      });
  };
};
