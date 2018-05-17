// we'll need axios
import axios from 'axios';
export const FETCH_SWAPI = 'FETCH-SWAPI';
export const FETCHING_SWAPI = 'FETCHING_SWAPI';
export const ERROR = 'ERROR';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchSwapi = ()  => {
   const getSwapi = axios.get(`https://swapi.co/api/people/`);
    return function (dispatch) {
        getSwapi
            .then((response ) => {
                console.log(response)
                dispatch({ type: FETCH_SWAPI, payload: response.data.results })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR, payload: true

                })
            })
    }
}
