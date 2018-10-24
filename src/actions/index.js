// we'll need axios
import axios from 'axios';

export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const fetchCharacters = () => dispatch => {
    dispatch({ type: FETCHING_CHARACTERS });
    axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            dispatch({ type: FETCHING_SUCCESS, payload: response.data.message });
        })
        .catch(error => {
            dispatch({ type: FETCHING_FAILURE, payload: error})
        })
}

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
