import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export function fetching() {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data.results
        });
      })
      .catch(error => {
        dispatch({
          type: FAILURE,
          payload: error
        });
      });
  };
}
