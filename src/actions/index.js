import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

export const getCharacters = () => {
  return dispatch => {
    dispatch({ type: GET_CHARACTERS });
    axios
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({
          type: GET_CHARACTERS_SUCCESS,
          payload: data.results
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_CHARACTERS_ERROR });
      });
  };
};
