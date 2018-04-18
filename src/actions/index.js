import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCH_CHARS = "FETCH_CHARS";
export const CHARS_FETCH_YES = "CHARS_FETCH_YES";
export const CHARS_FETCH_ERR = "CHARS_FETCH_ERR";

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have control over our thunk-based
export const fetchChars = () => {
    const promise = axios.get(`https://swapi.co/api/people`);
    return dispatch => {
        dispatch({ type: FETCH_CHARS });
        promise
            .then(response => {
                dispatch({ type: CHARS_FETCH_YES, payload: response.data.message});
            })
            .catch(err => {
                dispatch({ type: CHARS_FETCH_ERR });
            });
            
    };
};