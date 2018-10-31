import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetch = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('https://swapi.co/api/people')
    .then(res => {
      dispatch({ type: FETCHED, payload: res.data.results })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};
