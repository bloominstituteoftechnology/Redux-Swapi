import axios from "axios";

export const FETCH_CHARACTERS = "GET_CHARACTERS";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS });
  axios
    .get("https://swapi.co/api/people")
    .then(({ data }) => {
      dispatch({
        type: SUCCESS,
        payload: data.results
      });
    })
    .catch(error => {
      dispatch({
        type: FAIL,
        payload: error
      });
    });
};
