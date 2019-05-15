// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios';

export const CHAR_FETCH = 'CHAR_FETCH';
export const CHAR_SUCCESS = "CHAR_SUCCESS";
export const CHAR_FAILURE = 'CHAR_FAILURE';

export const getCharacter = () => dispatch => {
    dispatch({type: CHAR_FETCH})
    axios
    .get(`https://swapi.co/api/people`)
    .then(res => {
        console.log(res)
        dispatch({ type: CHAR_SUCCESS, payload: res.data.results })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: CHAR_FAILURE});
    }) 
}