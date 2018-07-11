// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
// our action creator will be a function that returns a promise
export const fetchData = chars => {
  const request = axios.get(`https://swapi.co/api/people/`);
  return (dispatch) => {
    dispatch({type: FETCHING});
    request.then(({response}) => {
      console.log(response);
      dispatch({type: FETCHED, payload: response.data});
    }).catch(err => {
      dispatch({type: ERROR, payload: err});
    })
  }
}

// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
