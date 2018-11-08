// we'll need axios
import axios from "axios";
// Define and export our action types
export const FETCHED_CHARS = "FETCHED_CHARS";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";
export const LOADING = "LOADING";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchChars = char => {
  // thunk will then pass the dispatch function to our callback, allowing us to dispatch multiple actions at multiple times.
  return dispatch => {
    // Here we dispatch an initial loading state action.
    dispatch({ type: SUCCESS });
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        console.log(response.data.message)
        // If the API call is successful, we will pass a success action type and the correct payload
        dispatch({
          type: FETCHED_CHARS,
          payload: response.data.message,

        });
      })
      .catch(err => {
        // If the API call is not successful, we will pass an action with the Error type.
        dispatch({ type: ERROR, payload: "Danger, Will Robinson" });
      });
  };
};
