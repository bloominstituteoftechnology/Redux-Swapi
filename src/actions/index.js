import axios from 'axios';

export const FETCHING_CHARS = 'FETCHING_CHARS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export default () => {
    return dispatch => {
        dispatch({ type: FETCHING_CHARS})
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                dispatch({ 
                    type: FETCH_SUCCESS,
                    payload: response.data.results
                })
            })
            .catch(err => {
                dispatch({ 
                    type: FETCH_FAILED,
                    payload: 'Something went wrong! Please try again.'
                })
            })
    }
}

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
