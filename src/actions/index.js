import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERRORS = 'ERRORS';



export const fetchingChars = () => {
    const promise = axios.get('https://swapi.co/api/people');
    return function(dispatch) {
        dispatch ({type: FETCHING})
        promise
            .then(response => {
                dispatch({ type: FETCHED, payload: response.data.results });
            })
            .catch(err => {
                dispatch({ type: ERRORS, msg: 'error fetching characters' })
        })
    }
}


