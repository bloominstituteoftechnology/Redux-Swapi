import axios from 'axios';

export const fetchData = () => {
  const promise = axios.get('https://swapi.co/api/people/');
  return dispatch => {
    dispatch({type: 'FETCHING_DATA' });
    promise
      .then(response => {
        dispatch({ type: 'DATA_FETCH_SUCCESS', results: response.data.results });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'DATA_FETCH_ERROR' })
      })
  }
}
