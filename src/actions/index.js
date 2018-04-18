import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const fetchChars = chars => {
  const promise = axios.get('https://swapi.co/api/people');
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(({data}) => {
        dispatch({ type: FETCHED, payload: data.results });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
