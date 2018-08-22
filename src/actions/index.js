import axios from 'axios';


export const FETCHING_DATA = "FETCHING_DATA";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const DATA_FETCH_ERROR = "DATA_FETCH_ERROR";



export const fetchData = () => {
    const promise = axios.get(`https://swapi.co/api/people/`);
    return dispatch => {
      dispatch({ type: FETCHING_DATA }); // first state of 'fetching' is dispatched
      promise
        .then(response => {
          dispatch({ type: DATA_FETCH_SUCCESS, payload: response.data.message }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: DATA_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };



// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
