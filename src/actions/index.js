import axios from 'axios';

// // we'll need to create 3 different action types here.
export const REQUEST_FETCHING = 'REQUEST_FETCHING'; // this means a request is going out (requestInFlight)
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'; //fetched
export const REQUEST_FAILURE = 'REQUEST_FAILURE'; //errors

// // our action creator will be a function that returns a promise
// // we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// // the url to fetch charicters from is `https://swapi.co/api/people/`
// // remember that now we have controll over our thunk-based



export const userRequest = () => {
    return function(dispatch) {
      dispatch({ type: REQUEST_FETCHING });
      axios.get(`https://swapi.co/api/people/`)
        .then(function(response){
             dispatch({type: REQUEST_SUCCESS, payload: response.data.results })
        })
        .catch(function(error){
            console.log(error)
            dispatch({type: REQUEST_FAILURE, error});
        })
    }
}
  
