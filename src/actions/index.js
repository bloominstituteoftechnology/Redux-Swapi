// we'll need axios
import axios from 'axios';
export const FETCH_SWAPI = 'FETCH-SWAPI';
export const FETCHING_SWAPI = 'FETCHING_SWAPI';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchSwapi = ()  => {
    getSwapi = axios.get(`https://swapi.co/api/people/`);
    return function (dispatch) {
        dispatch ({ type: FETCHING_SWAPI });
        getSwapi
            .then(swapiData => {
                setTimeout(() => {
                    dispatch({ type: FETCH_SWAPI, payload: swapiData.data})
                }, 1000);
            })
            .catch(err => {
                console.log(err);
            })
    }
}
