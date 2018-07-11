// we'll need axios
const axios = require("axios");
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const fetch = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get("https://swapi.co/api/people")
      .then(function(response) {
        // handle success
        dispatch({ type: FETCHED });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        dispatch({ type: ERROR });
        console.log(error);
      });
    dispatch({ type: FETCHED });
  };
};
