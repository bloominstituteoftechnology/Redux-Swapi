import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const fetchChars = () => {
    return dispatch => {
        dispatch({
            type: LOADING
        });
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data.results
                });
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: "Galaxy too far away"
                });
            });
    };
};