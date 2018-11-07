import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


export const getCharacters = () => dispatch => {
    dispatch({type: FETCHING});
    axios
        .get(`https://swapi.co/api/people/`)
        .then(({data}) => {
        dispatch({
            type: SUCCESS,
            payload: data.results
        });
        })
        .catch(error => {
        dispatch({
            type: FAILURE,
            payload: error
        });
        });
};
