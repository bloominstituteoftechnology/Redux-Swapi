import axios from 'axios';

export const SWAPI_FETCH_IN_PROGRESS = "SWAPI_FETCH_IN_PROGRESS";
export const SWAPI_FETCH_SUCCESSFUL = "SWAPI_FETCH_SUCCESSFUL";
export const SWAPI_FETCH_FAILURE = "SWAPI_FETCH_FAILURE";

export const fetchSwapi = () => {
  return dispatch => {
    dispatch({type: SWAPI_FETCH_IN_PROGRESS});
    axios.get('https://swapi.co/api/people/')
         .then(resp => {
           dispatch({
             type: SWAPI_FETCH_SUCCESSFUL,
             payload: resp.data.results
            })
         })
         .catch(err => {
           console.log(err);
           dispatch({
             type: SWAPI_FETCH_FAILURE,
             payload: err
           })
         })
  }
}