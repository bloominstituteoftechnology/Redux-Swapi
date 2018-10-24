// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHARACTER = "FETCHING_CHARACTER";
export const CHARACTER_FETCH_SUCCESS = "CHARACTER_FETCH_SUCCESS";
export const CHARACTER_FETCH_FAILURE = "CHARACTER_FETCH_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchCharacters = () => {
    const promise = axios.get(`https://swapi.co/api/people/`);
    return dispatch => {
        dispatch({ type: FETCHING_CHARACTER });
        promise
            .then(response => {
                console.log(response);
                dispatch({ type: CHARACTER_FETCH_SUCCESS, payload: response.data.results });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: CHARACTER_FETCH_FAILURE });
            });
    };
};
