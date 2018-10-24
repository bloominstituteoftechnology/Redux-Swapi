import axios from 'axios'

// we'll need axios
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetch = () => dispatch =>{
    dispatch({type:FETCHING})
    axios.get(`https://swapi.co/api/people/`)
    .then(response =>{
        dispatch({type: SUCCESS, payload: response.data.results})
        
    })
    .catch(error => {
        dispatch({type:FAILURE, payload: error})
    })

}
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is 
// remember that now we have controll over our thunk-based
