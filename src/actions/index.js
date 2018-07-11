// we'll need axios
import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const getCharacters = () => {
  return function(dispatch) {
        dispatch({type: FETCHING});
        axios.get(`https://swapi.co/api/people/`)
          .then((chars) => {
              dispatch({ type: FETCHED, payload: chars.data.results});
            })
          .catch(error => {
              dispatch({type: ERROR, payload: console.log(error)});
            })
    };
}
