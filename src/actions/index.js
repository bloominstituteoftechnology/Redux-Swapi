// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS';
export const CHARACTERS_FETCH_SUCCESS = 'CHARACTERS_FETCH_SUCCESS';
export const CHARACTERS_FETCH_ERROR = 'CHARACTERS_FETCH_ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based

export const fetchCharacters = () => {
    const promise = axios.get(`https://swapi.co/api/people/`);
    return dispatch => {
        dispatch({ type: FETCHING_CHARACTERS });
        promise
            .then(res => {
                dispatch({ type: CHARACTERS_FETCH_SUCCESS, payload: res.data.results})
            })
            .catch(err => {
                dispatch({ type: CHARACTERS_FETCH_ERROR, payload: err });
            });
    }
}