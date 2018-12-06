// we'll need axios
import axios from "axios";
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchData = () => dispatch => {
  //axios promises
  dispatch({ type: FETCHING });
  axios
    .get("https://swapi.co/api/people/")
    .then(({ data }) => {
      console.log("axios", data);
      dispatch({ type: SUCCESS, payload: data.results });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};
