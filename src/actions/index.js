import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchData () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get('https://swapi.co/api/people')
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};
