import axios from 'axios';

export const FETCHING = "FETCHING";
export const IS_FETCHED = "IS_FETCHED";
export const ERR_FETCHED = "ERR_FETCHED";

export const fetchPeople = () => {
  const request = axios.get('https://swapi.co/api/people/');
  
  return (dispatch) => {
    dispatch({ type: FETCHING });
    request.then(data => {
              return data.data.results;
            })
            .then(data => {
              dispatch({ type: IS_FETCHED, people: data});
            })
            .catch(error => {
              dispatch({ type: ERR_FETCHED });
              console.error(error);
            })
  }
}