// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
export const FETCHED_CHARS = "FETCHED_CHARS";
export const LOADING = "LOADING";
// one for fetching, one for success and one for failure
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
// our action creator will be a function that returns a function
export const fetchChars = chars => {
  return dispatch => {
    dispatch({ type: LOADING });
      axios
          .get(`https://swapi.co/api/people/`)
          .then(response => {
              dispatch({
                  type: FETCHED_CHARS,
                  payload: reponse.data.message.slice(0, 5)
              })
          })
          .catch(err => {
          dispatch({type:ERROR, payload: "NONE HERE"})
      })
  };
};

// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
