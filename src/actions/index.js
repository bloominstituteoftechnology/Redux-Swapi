// we'll need axios
const axios = require("axios");
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const fetching = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data.results });
    })
    .catch(res => {
      dispatch({
        type: FAILURE,
        payload: res.data
      });
    });
};
