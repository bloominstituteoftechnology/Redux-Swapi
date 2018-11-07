import axios from "axios";

export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";

export const fetchCharacters = () => {
    console.log("In the actions");
    
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
          console.log("In the then")
        dispatch({ type: SUCCESS, payload: response.data.results });
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: "Characters not found"
        });
      });
  };
};
