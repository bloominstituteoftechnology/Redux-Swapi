import axios from 'axios'; // we'll need axios

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

// Because we're using redux-thunk
// thunk will intercept the action and send a dummy action to the reducer, triggering default switch
export const fetchChar = people => {
// thunk will pass dispatch function to callback, allow dispatch multiple actions at multiple times
    return dispatch => {
        // dispatch initial fetching action
        dispatch({ type: FETCHING });

        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            //the Action
            dispatch({
                type: SUCCESS,
                payload: response.data.results
            });
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: "Unable to Fetch SW Data" });
        });
    };
};