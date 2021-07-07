// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchingAction = () => {
    return dispatch => {
        dispatch({
            type: FETCHING
        });
        axios
            .get('https://swapi.co/api/people')
            .then(response => {
                console.log(response);
                dispatch({
                    type: FETCHED,
                    payload: response.data.results
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'Unable to load. Please refresh to try again.'
                })
            })
    }
}