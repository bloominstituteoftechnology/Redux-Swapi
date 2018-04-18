// we'll need axios
import axios from "axios";

export const FETCHING_PEOPLE = "FETCHING_PEOPLE";
export const PEOPLE_FETCH_SUCCESS = "PEOPLE_FETCH_SUCCESS";
export const PEOPLE_FETCH_ERROR = "PEOPLE_FETCH_ERROR";
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based
// https://swapi.co/api/people
export const fetchPeople = () => {
    const promise = axios.get(`https://swapi.co/api/people/`);
    return dispatch => {
      // res.json();
      
      dispatch({ type: FETCHING_PEOPLE }); // first state of 'fetching' is dispatched
      promise
        .then(response => {
          console.log('RESPONSE:',response);
          dispatch({ type: PEOPLE_FETCH_SUCCESS, payload: response.data.results }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: PEOPLE_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };