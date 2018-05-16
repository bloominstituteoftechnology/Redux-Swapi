// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controlllllllllll over our thunk-based ..... what

import axios from 'axios';
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHARS_FETCHED = 'CHARS_FETCHED';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';

export const fetchChars = () => {
    const getChars = axios.get('https://swapi.co/api/people');
    return dispatch => {
      dispatch({ type: FETCHING_CHARS }); 
      getChars
        .then(response => {
            dispatch({ type: CHARS_FETCHED, payload: response.data.results });
        })
        .catch(err => {
            dispatch({
                type: ERROR_FETCHING_CHARS,
                payload: 'Error Fetching Chars'
            });
        });
    };
};