// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch characters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based
export function getChars() {
    return function action(dispatch) {
        dispatch({ type: FETCHING })

        const request = axios({
          method: "GET",
          url: "https://swapi.co/api/people",
          headers: []
        });

        return request.then(
            response => dispatch({ type: FETCHED, chars: response.data.results }),
            err => dispatch({ type: ERROR, errorMessage: 'Oops!' })
        );
    }
}