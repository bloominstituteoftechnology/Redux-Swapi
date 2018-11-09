// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

//ADDED CODE

import axios from "axios";
// Define and export our action types
export const FETCHED_DOGS = "FETCHED_DOGS";
export const LOADING = "LOADING";
export const COMPLETE = "COMPLETE";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";

// Becuase we are using redux-thunk, we can pass a function as our action.
// If we pass a normal action, thunk will pass it along as if northing happened
// thunk will intercept the action and send a dummy action to the reducer, triggering our default switch.
export const fetchDogs = breed => {
  // thunk will then pass the dispatch function to our callback, allowing us to dispatch multiple actions at multiple times.
  return dispatch => {
    // Here we dispatch an initial loading state action.
    dispatch({ type: LOADING });
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => {
        // If the API call is successful, we will pass a success action type and the correct payload
        dispatch({
          type: FETCHED_DOGS,
          payload: response.data.message.slice(0, 10)
        });
      })
      .catch(err => {
        // If the API call is not successful, we will pass an action with the Error type.
        dispatch({ type: ERROR, payload: "Unrecognized Breed" });
      });
  };
};
