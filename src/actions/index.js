// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
// one for fetching, one for success and one for failure

export const fetchCharacters = () => {
  const getChars = axios.get("https://swapi.co/api/people/");
  return function(dispatch) {
    dispatch({type: FETCHING});
    getChars
      .then(chars => dispatch({type: SUCCESS, payload: chars.data}))
      .catch(err => dispatch({type: ERROR, payload: err}));
  };
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
