import axios from 'axios';// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';



// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetched = () => {
    const getPpl = axios.get('https://swapi.co/api/people/');

    return dispatch => {
        getPpl
            .then(data => {
                const { res } = data.data;
                return dispatch({type: FETCHED, payload: res})
            })
            .catch(err => {
                console.log('you have an error')
                return dispatch({type: ERROR, payload: err})
            });
    }
}