// we'll need axios
import { axios } from 'axios';


// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHED_CHAR = 'FETCHED_CHAR';
export const FETCHING_CHAR = 'FETCHING_CHAR'
export const ERROR_FETCHING_CHAR = 'ERROR_FETCHING_CHAR'
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const getChar = chars => {
    const promise = axios.get('https://swapi.co/api/people')
    return dispatch => {
        dispatch({ type : FETCHING_CHAR })
        promise
            .then(({data}) => {
                dispatch({ type : FETCHED_CHAR, payload : data.results})
            })
            .catch(err =>{
                dispatch({ type : ERROR_FETCHING_CHAR , payload : err})
            })
    }
}

