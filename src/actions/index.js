import axios from "axios";

export const FETCHING_CHARS = "FETCHING_CHARS";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const fetchChars = char => {
  return dispatch => {
    dispatch({ type: FETCHING_CHARS });
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data.message
        });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: "Galaxy too far away" });
      });
  };
};

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
