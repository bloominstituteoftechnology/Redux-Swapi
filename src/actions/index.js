// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';
export const CHARS_FETCHED = 'CHARS_FETCHED';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
const url = 'https://swapi.co/api/people/';

export const fetchChars = () => {
    const starWarsChars = axios.get(url);
    return (dispatch) => {
        dispatch({type: FETCHING_CHARS});
        starWarsChars
            .then(response =? {
                console.log(response);
                dispatch({ type: CHARS_FETCHED, payload: [] });
            })
            .catch(err => {
                dispatch({
                    type: ERROR_FETCHING_CHARS,
                    payload: 'Error fetching characters'
                });
            });
    };
};