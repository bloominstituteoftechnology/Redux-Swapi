import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const fetching = () => {
    return {
        type: FETCHING
    };
}

const fetched = (data) => {
    return {
        type: FETCHED,
        payload: data
    }
}

const errors = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}

export const actionCreator = () => {
    const getChars = axios.get('https://swapi.co/api/people/');
    return function(dispatch) {
        dispatch(fetching());
        getChars
            .then( res => {
                dispatch(fetched(res.data.results));
            })
            .catch( err => {
                dispatch(errors(err));
            })
    }
}