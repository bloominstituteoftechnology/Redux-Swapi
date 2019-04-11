// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS';
export const FETCHING_CHARACTERS_SUCCESS = 'FETCHING_CHARACTERS_SUCCESS';
export const FETCHING_CHARACTERS_FAILURE = 'FETCHING_CHARACTERS_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING_CHARACTERS });
    axios
        .get(`https://swapi.co/api/people/`)
        .then(response => dispatch({ type: FETCHING_CHARACTERS_SUCCESS, payload: response.data.results }))
        .catch(error => dispatch({ type: FETCHING_CHARACTERS_FAILURE, payload: error }))
}
