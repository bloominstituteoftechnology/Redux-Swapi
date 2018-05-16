// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_CHARS = 'FETCHING_CHARS'
export const FETCHED_CHARS = 'FETCHED_CHARS'
export const ERROR = 'ERROR'

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchingChars = () => {
    const request = axios.get('https://swapi.co/api/people/')
    return (dispatch) => {
        dispatch({type: FETCHING_CHARS})
        request.then(({data}) => {
          dispatch({type: FETCHED_CHARS, data: data.results});
        })
        .catch(err => {
          dispatch({type: ERROR, error: err});
        });
      };
}