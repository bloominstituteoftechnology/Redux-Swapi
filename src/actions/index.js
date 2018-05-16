// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_SW = 'FETCHING_SW';
export const FETCHED_SW = 'FETCHED_SW';
export const ERROR = 'ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchedSw = () => {
    const getStarWar = axios.get('https://swapi.co/api/people/');
    return (dispatch) => {
        getStarWar
            .then( response => {
               console.log(response.data)
            })
            .catch( err => {
                console.log(err);
            })
    }
}
