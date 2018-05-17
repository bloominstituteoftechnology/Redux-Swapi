import axios from 'axios';
export const FETCHING = 'FETCHING_CHARS';
export const FETCHED = 'CHARS_FETCHED';
export const FETCHED_ERR = 'ERROR_FETCHING_CHARS';

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const fetch = () => {
    const Chars = axios.get(`https://swapi.co/api/people/`);
    return dispatch => {
        dispatch({ type: FETCHING });
        Chars
            .then(response => {
                dispatch({ type: FETCHED, payload: response.data.results });
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: FETCHED_ERR,
                    payload: 'Error Fetching Chars'
                });
            });
    };
};
