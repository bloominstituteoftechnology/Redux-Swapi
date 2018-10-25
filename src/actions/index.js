// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const getData = () => dispatch => {
    return (
        axios
            .get('https://swapi.co/api/people')
            .then(({ data }) => {
                console.log(data)
                dispatch({ type: 'FETCH_SUCCESS', payload: data.results});
            })
            .catch(error => {
                dispatch({ type: 'FETCH_FAIL', payload: error});
            })
            )
}