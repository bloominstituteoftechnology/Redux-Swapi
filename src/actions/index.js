import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchingSwapi = () => {
  return function(dispatch){
    dispatch({
      type: FETCHING
    });
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        dispatch({
          type: FETCHED,
          payload: response.data.results
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        })
      })
  };
};
