// we'll need axios
import axios from 'axios';
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';
export const CHARS_FETCHED = 'CHARS_FETCHED';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchChars = () => {
    const startWarsChars = axios.get('https://swapi.co/api/people/'); // Variable becomes a promise object
    return dispatch => {
        dispatch({ type: FETCHING_CHARS }); //updates store based on this type
        startWarsChars
            .then(response => {
                console.log(response);
                dispatch({ type: CHARS_FETCHED, PAYLOAD: [] });
            })
            .catch(err => {
                dispatch({
                    type: ERROR_FETCHING_CHARS,
                    payloaf: 'Error Fetching chars'
                });
            });
    };
};
