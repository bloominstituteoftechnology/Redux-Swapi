// we'll need axios
import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const GET_FETCHED_DATA = 'GET_FETCHED_DATA';
export const ERROR_HANDLER = 'ERROR_HANDLER';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export default fetchData = () => {
    const request = axios.get(`https://swapi.co/api/people/`);
    return (dispatch) => {
        request.then(response => console.log(response));
    }
}
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
