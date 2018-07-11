// we'll need axios
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const fetchData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get('https://swapi.co/api/people')
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};
