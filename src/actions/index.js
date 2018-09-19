// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const FETCHING_PEOPLE = 'FETCHING_PEOPLE';
export const FETCHED_PEOPLE = 'FETCHED_PEOPLE';
export const ERROR_PEOPLE = 'ERROR_PEOPLE';

export const fetchPeople = () => {
  return dispatch => {
    dispatch({type: FETCHING_PEOPLE});
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => dispatch({ type: FETCHED_PEOPLE, payload:(response.data.results)}))
      .catch(err => dispatch({type: ERROR_PEOPLE }));
  }
}