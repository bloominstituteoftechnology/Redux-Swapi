import axios from 'axios';
export const FETCHING_CHARACTERS ='FETCHING_CHARACTERS';
export const CHAR_FETCH_SUCCESS = ' CHAR_FETCH_SUCCESS';
export const CHAR_FETCH_ERROR = "CHAR_FETCH_ERROR";




const fetchCharActionCreator  = () =>{
    const promise = axios.get('https://swapi.co/api/people') 

    return   (dispatch) =>{
        promise.then(  dispatch({ type: FETCHING_CHARACTERS }))
       
               .then( response => {       
                       dispatch({ type: CHAR_FETCH_SUCCESS, payload:response.data.results})
                 })
               .catch( error =>{
                     console.log(error)
                        dispatch({ type: CHAR_FETCH_ERROR })
        })
    }
}
export default fetchCharActionCreator;

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middleware"
// the url to fetch characters from is `https://swapi.co/api/people`
// remember that now we have controls over our thunk-based
