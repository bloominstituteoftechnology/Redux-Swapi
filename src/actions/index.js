
// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export function bobaFetch() {
    return function (dispatch) {
        dispatch({type: FETCH_CHARACTERS});
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            dispatch({
                type: SUCCESS,
                characters: response.data.results,
            });
        })
        .catch(error => {
            dispatch({type: FAILURE});
        });
    }
}
