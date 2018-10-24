// ACTIONS ----------------------- ACTIONS
import axios from 'axios';

export const FETCHING_CHARS = 'FETCHING_CHARS';
export const FETCHING_CHARS_SUCCESS = 'FETCHING_CHARS_SUCCESS';
export const FETCHING_CHARS_FAILURE = 'FETCHING_CHARS_FAILURE';

export const fetchChars = () => dispatch => {
    dispatch({ type: FETCHING_CHARS });
    // send for the images. then...
    axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            console.log('response.data.results', response.data.results);
            dispatch({
                type: FETCHING_CHARS_SUCCESS, 
                payload: response.data.results
            })
        })
        .catch(error => {
            dispatch({
                type: FETCHING_CHARS_FAILURE,
                payload: error
            })
        })
}


