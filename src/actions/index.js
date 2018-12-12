import axios from 'axios';

export const FETCH_SWAPI_START = 'FETCH_SWAPI_START';
export const FETCH_SWAPI_SUCCESS = 'FETCH_SWAPI_SUCCESS';
export const FETCH_SWAPI_FAILURE = 'FETCH_SWAPI_FAILURE';

export const fetchSwapi = () => dispatch => {
    dispatch({ type: FETCH_SWAPI_START });
    axios
        .get('https://swapi.co/api/people')
        .then(({data}) => {
            dispatch({ type: FETCH_SWAPI_SUCCESS, payload: data.results });
        })
        .catch(err => {
            dispatch({ type: FETCH_SWAPI_FAILURE, payload: err })
        });
};



// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
