import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

 export const fetchPeople = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios
        .get('https://swapi.co/api/people')
        .then(response => {
            dispatch({
                type: FETCHED, payload: response.data.results
            })
            console.log(response)
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: 'No characters' });
            console.log(error)
        })
    }
}
