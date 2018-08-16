// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

//  function myCleverAction = () => {
//     const request = axios.get('https://someRadUrlAPI.com/api/coolness);
//     return (dispatch) => {
//       request.then(({data}) => {
//         dispatch({type: GET_COOL_THING, payload: data.things});
//       })
//       .catch(err => {
//         dispatch({type: ERROR_GETTING_THINGS, error: err});
//       });
//     };
//   };

export const fetchChars = () => {
    return dispatch => {
        dispatch({ type: FETCHING }); // first state of 'fetching' is dispatched
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                dispatch({ type: FETCHED, payload: response.data.results }); // 2nd state of success is dispatched IF the promise resolves
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR, payload: err }); // our other 2nd state of 'rejected' will be dispatched here.
            });
    };
};

// export function addMovie(movie) {
//     return function(dispatch) {
//       // we can now place logic here and decide when to call dispatch
//       dispatch({ type: FECH_MOVIES_STARTED });

//       return axios // not sure if the return is needed here
//         .get(url)
//         .then(({ data }) => {
//           dispatch({ type: FETCH_MOVIES_SUCCESS, data });
//           // or if you have an action creator for this action in scope (maybe imported)
//           // dispatch(loadMoviesData(data));
//           // the loadMoviesData() action creator would dispatch the action
//         })
//         .catch(err => {
//           dispatch({ type: FETCH_MOVIES_ERROR, err });
//         });
//     };
//   }

//   const addMovie = movie => dispatch => {
//     // we can now place logic here and decide when to call dispatch and what action to dispatch
//     dispatch({ type: FECH_MOVIES_STARTED });

//     axios
//       .get(url)
//       .then(({ data }) => {
//         dispatch({ type: FETCH_MOVIES_SUCCESS, data });
//       })
//       .catch(err => {
//         dispatch({ type: FETCH_MOVIES_ERROR, err });
//       });
//   };