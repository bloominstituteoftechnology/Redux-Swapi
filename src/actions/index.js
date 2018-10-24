// we'll need axios
import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`

const URL = "https://swapi.co/api/people/";
// remember that now we have controll over our thunk-based action creator

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(({ data }) => {
        dispatch({ type: FETCHED, payload: data.results });
      })
      .catch(err => {
        dispatch({ type: ERROR, error: err });
      });
  };
};
