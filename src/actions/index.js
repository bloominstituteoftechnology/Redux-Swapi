// ACTIONS ----------------------- ACTIONS
import axios from 'axios';

export const fetchChars = () => dispatch => {
    dispatch({ type: FETCHING_CHARS });
    // send for the images. then...
    axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            dispatch({
                type: FETCHING_CHARS_SUCCESS, 
                payload: response.data.characters
            })
        })
        .catch(error => {
            dispatch({
                type: FETCHING_CHARS_FAILURE,
                payload: error
            })
        })
}

export const FETCHING_CHARS = 'FETCHING_CHARS';
export const FETCHING_CHARS_SUCCESS = 'FETCHING_CHARS_SUCCESS';
export const FETCHING_CHARS_FAILURE = 'FETCHING_CHARS_FAILURE';
