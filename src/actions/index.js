// we'll need axios
import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

const URL = "https://swapi.co/api/people/";

export const fetchData = () => {
  //   const URL = axios.get("https://swapi.co/api/people/");
  //   return dispatch => {
  //     URL.then(response => {
  //       console.log("get response:", response);
  //       // return response;
  //       dispatch({ type: FETCHED, payload: response.data });

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
