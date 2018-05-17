// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchingPeople = () => {
  const request = axios.get('https://swapi.co/api/people');
  return (dispatch) => {
    console.log('dispatch', dispatch)
      dispatch({
        type: FETCHING,
      })     
      request
        .then(({ data }) => {
          console.log('data', data);
          dispatch({ type: FETCHED, data: data.results });
        })
        .catch(err => {
          console.log('err', err);
          dispatch({
            type: ERROR,
            error: err
          });
        });
    };
};
  



