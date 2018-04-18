import axios from 'axios';


export const GET_CHARS = 'GET_CHARS';
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';

const URL = 'https://swapi.co/api/people';

const getAPI  = () => {
    return axios.get(`${URL}`);
};

export const getChars = () => {
    const promise = getAPI();
    return dispatch => {
        dispatch({type: FETCHING_CHARS});
        promise
            .then(({data}) => {
                dispatch({type: GET_CHARS, payload: data.results});
            })
            .catch(err => {
                dispatch({type: ERROR_FETCHING_CHARS, payload:err});
            });
    };
};
