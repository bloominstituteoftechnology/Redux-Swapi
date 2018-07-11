import axios from 'axios';

export const getChars = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCHING' });
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        dispatch({ type: 'FETCHED', payload: response.data.results });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
