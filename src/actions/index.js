import axios from 'axios';

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_START = 'FETCH_START';
export const FETCH_FAIL= 'FETCH_FAIL';

export const getChars = () => {
        dispatch({ type: FETCH_START});
        axios
            .get('https://swapi.co/api/people')
            .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
            .catch(err => dispatch({ type: FETCH_FAIL, payload: err}))
    
};