// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios';

export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';
export const FETCH_DATA = 'FETCH_DATA';


export const fetchData = () => dispatch =>{
    console.log("Fetch Data has been invoked")
    dispatch({ type : FETCH_DATA });// dispatching fetchdata to reducer so it displays a loading screen while data is getting fetched
    axios
        .get( `https://swapi.co/api/people/`)
        .then(response => {
            dispatch({type: DATA_FETCH_SUCCESS, payload: response.data.results})
        }) 
        .catch(error => {dispatch({type : DATA_FETCH_FAILURE, payload: error })})
}