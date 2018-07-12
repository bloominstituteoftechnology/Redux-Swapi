import axios from 'axios';

export const RECEIVING_DATA = 'RECEIVING_DATA';
export const ON_DATA_RECEIVED = 'ON_DATA_RECEIVED';
export const ON_DATA_ERROR = 'ON_DATA_ERROR';

export const fetchData = () => {
  return function(dispatch) {
    dispatch({ type: RECEIVING_DATA });
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      dispatch({ type: ON_DATA_RECEIVED, payload: response.data });
    })
    .catch(e => dispatch({ type: ON_DATA_ERROR, payload: e }));
  };
};