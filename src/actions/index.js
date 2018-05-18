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

//applyMiddleware allows us to return the dispatch function instead of an object with type and payload
export const fetchChars = () => {
    const starWarsChars = axios.get(`https://swapi.co/api/people/`);
    return (dispatch) => {
        dispatch({type: FETCHING_CHARS});
        starWarsChars
            .then(response => {
                console.log(response)
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