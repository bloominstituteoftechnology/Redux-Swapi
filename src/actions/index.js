import axios from "axios";
// we'll need axios
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_ERR = 'FRIENDS_ERR';

export const fetchCharacters = () => dispatch => {
    const promise = axios.get('https://swapi.co/api/people')
    dispatch({type: FETCHING_FRIENDS})
    promise
    .then(({data}) => {
        dispatch({type: FRIENDS_SUCCESS, payload: data.results})
    })
    .catch(err => {
        dispatch({type: FRIENDS_ERR, payload: err})
    })
    
}