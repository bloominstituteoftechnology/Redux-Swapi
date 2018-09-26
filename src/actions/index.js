// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
import axios from 'axios'


 export const FETCHING_DATA = 'FETCHING_DATA';
 export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCES';
 export const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR';


 export const fetchData = () =>{
   return dispatch => {
     dispatch({type:FETCHING_DATA });
     axios
     .get('https://swapi.co/api/people/')
     .then(response=>{
       console.log(response)

         dispatch({type:FETCHING_DATA_SUCCESS, payload:response.data});
     })
     .catch(err =>{
       console.log(err)
       dispatch({ type: FETCHING_DATA_ERROR });
     });
   }
 }
