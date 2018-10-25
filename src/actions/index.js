import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

export const getCharacters = () => {
  return dispatch => {
    dispatch({ type: GET_CHARACTERS });
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        dispatch({
          type: GET_CHARACTERS_SUCCESS,
          payload: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_CHARACTERS_ERROR, payload: err });
      });
  };
};
