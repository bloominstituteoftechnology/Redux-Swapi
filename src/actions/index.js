// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// Actions: objects wrapped in a function

import axios from "axios";

export const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
export const FETCHING_CHARACTERS_SUCCESS = "FETCHING_CHARACTERS_SUCCESS";
export const FETCHING_CHARACTERS_FAILURE = "FETCHING_CHARACTERS_FAILURE";

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCHING_CHARACTERS });
  axios
    .get("https://swapi.co/api/people")
    .then(({ data }) => {
      dispatch({
        type: FETCHING_CHARACTERS_SUCCESS,
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_CHARACTERS_FAILURE,
        payload: err
      });
    });
};