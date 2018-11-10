// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

// our action creator will be a function that returns a function
export const getData = dispatch => {
    return dispatch => {
        dispatch({type:FETCHING});
        axios
            .get('https://swapi.co/api/people')
            .then( response => {
                             console.log(response.data);
                             dispatch({
                                 type:SUCCESS,
                                 payload: response.data.results                               
                             })
        })
          .catch( error => {
               dispatch({type: ERROR, payload: "Not able to get the data" })
          });
    };
};
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
