import axios from "axios";


export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchingChars = () => {
    const getData = axios.get(`https://swapi.co/api/people/`);
    return function(dispatch) {
        dispatch({type: FETCHING});
        getData
            .then((characterData) => {
                dispatch({ type: FETCHED, payload: characterData.data.results});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: console.log(err)});
            })
    };
};
