import axios from "axios";

export const FETCHING = "FETCHING";
export const ERROR = "FETCH_ERROR";
export const SUCCESS = "FETCH_SUCCESS";

export const fetchCharacters = () => {
  const starwarsChars = axios.get("https://swapi.co/api/people");
  return dispatch => {
    dispatch({ type: FETCHING });
    starwarsChars
      .then(res => {
        dispatch({ type: SUCCESS, payload: res.data.results });
      })
      .catch(err => dispatch({ type: ERROR, payload: `We've had ${err}` }));
  };
};
