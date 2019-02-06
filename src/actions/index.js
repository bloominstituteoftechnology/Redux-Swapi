import axios from "axios";
export const GET_SWAPI = "GET_SWAPI";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";

// we'll need axios
export function getSwapi() {
  return dispatch => {
    dispatch({ type: GET_SWAPI });
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        dispatch({
            type: SUCCESS,
            payload: res.data.results
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "Characters Failed to Load"
        });
      });
  };
}

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
