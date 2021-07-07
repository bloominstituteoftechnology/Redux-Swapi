import axios from "axios";

export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";

export const fetchPeople = () => {
    return dispatch => {
        dispatch({type: FETCHING});
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            });
        })
        .catch(err=> {
            dispatch({
                type: FAILURE, 
                payload: "Character does not exist"
            });
        });
    };
};

//need to include dispatch 

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
