// we'll need axios
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCHING_DATA = 'FETCHING_DATA';
export const ERROR_FETCHING = 'ERROR_FETCHING';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const fetching_data = () => {
    const request = axios.get(`https://swapi.co/api/people/`);
    return (dispatch => {
        dispatch({ type: FETCHING_DATA })
     request
        .then( Fetchdata => {
            console.log("FetchData",Fetchdata)
            console.log("FetchData.data", Fetchdata.data.results)
            dispatch({ type: FETCH_DATA, payload: Fetchdata.data.results})
        })
        .catch(err => {
            dispatch({type: ERROR_FETCHING, error: err})
        });
    });
};

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
