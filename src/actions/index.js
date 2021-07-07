// we'll need axios
import axios from 'axios';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS });
    axios.get("https://swapi.co/api/people")
        .then( response => {
            dispatch({
                type: FETCH_CHARACTERS_SUCCESS,
                payload: response.data.results,
            });
        })

        .catch(error => {
            dispatch({
                type: FETCH_CHARACTERS_FAILURE,
                payload: error,
            });
        });
};

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
