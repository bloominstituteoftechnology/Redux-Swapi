// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const FETCHING_THING = 'FETCHING_THING'
export const FETCHED_THING = 'FETCHED_THING'
export const ERROR = 'ERROR'

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetching_thing = () => {
    const request = axios.get('https://swapi.co/api/people/')
    return (dispatch) => {
                dispatch({type: FETCHING_THING})
                request.then(({data}) => {
                  dispatch({type: FETCHED_THING, data: data.results});
                })
                .catch(err => {
                  dispatch({type: ERROR, error: err});
                });
              };
            }