import axios from 'axios';

import { FETCHING, GET_CHARACTERS, ERROR_GETTING_CHARACTERS } from '../constants';

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING });
    const request = axios
        .get('https://swapi.co/api/people/')
        .then(({data}) => {
            dispatch({type: GET_CHARACTERS, payload: data.results });
        })
        .catch(err => {
            dispatch({type: ERROR_GETTING_CHARACTERS, error: err});
        });
};