import axios from "axios";

export const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
export const FETCHING_CHARACTERS_SUCCESS = "FETCHING_CHARACTERS_SUCCESS";
export const FETCHING_CHARACTERS_FAILURE = "FETCHING_CHARACTERS_FAILURE";

export const fetchCharacters = () => dispatch => {
  dispatch({ type: FETCHING_CHARACTERS });
  axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      dispatch({
        type: FETCHING_CHARACTERS_SUCCESS,
        payload: response.data.results
      });
    })
    .catch(error => {
      dispatch({ type: FETCHING_CHARACTERS_FAILURE, payload: error });
    });
};
