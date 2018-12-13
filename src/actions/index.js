// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
export const fetchPeople = () => (dispatch) => {
  dispatch({ type: FETCH }); //part of a way to start a fetch loading thing while waiting for load
  axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response)
      dispatch({type: SUCCESS, payload: response.data.results});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
