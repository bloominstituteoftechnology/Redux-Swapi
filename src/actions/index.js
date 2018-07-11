// we'll need axios
import {axios} from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const ERROR_RECEIVED = 'ERROR_RECEIVED';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const fetchingData = () => {
 return (dispatch) => {
     dispatch({type: Fetching})
 }   
}

export const dataFetched = () => {
    return (dispatch) => {
        dispatch({type: DATA_FETCHED})
    }   
   }

   export const errorReceived = () => {
    return (dispatch) => {
        dispatch({type: ERROR_RECEIVED})
    }   
   }