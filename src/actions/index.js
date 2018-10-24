import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const ERROR_GETTING_CHARACTERS = "ERROR_GETTING_CHARACTERS";

export const getCharacters = () => {
  const promise = axios.get("https://swapi.co/api/people");
  return dispatch => {
    dispatch({ type: GET_CHARACTERS });

    promise
      .then(response => {
        dispatch({
          type: GET_CHARACTERS_SUCCESS,
          payload: response.data.characters
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR_GETTING_CHARACTERS });
      });
  };
};
