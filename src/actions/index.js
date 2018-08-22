import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';


// we'll need axios
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const fetching = () => {
    return {
        type: FETCHING,
        payload: axios
            .get('https://swapi.co/api/people/')
    };
};

export const fetched = () => {
    return {
        type: FETCHED,
        payload: axios
            .then(response => {
                this.setState(() => ({ chars: response.data }));
            })
    };
};

export const error = () => {
    return {
        type: ERROR,
        payload: axios
            .catch(error => {
                console.error(error);
            })
    };
};

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
