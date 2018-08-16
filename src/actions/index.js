// we'll need axios
import axios from 'axios';
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const getCharacters = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    // axios call would go here with a .then()
    axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data.results })
      })
      .catch(response => {
        dispatch({ type: FAILURE, payload: response.error})
      });
  };
};
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
