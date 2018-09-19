import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchChars = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('https://swapi.co/api/people')
    .then(response => {
      dispatch({ type: FETCHED, payload: response.data.results });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR });
    });
};
