import axios from "axios";
import thunk from "redux-thunk";


export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetching = () => {
    const fetching = axios.get(`https://swapi.co/api/people/`)
    return function(dispatch) {
        dispatch({type: FETCHING});
        fetching
            .then(characterData =>{
                dispatch({type: FETCHED, payload: characterData.data})
            })
            .catch(err => {
                dispatch({type: ERROR});
            })
    }
}
