import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const DATA_FETCH_ERROR = "DATA_FETCH_ERROR";

export const fetchData = () => {
	const promise = axios.get("https://swapi.co/api/people/");
	return dispatch => {
		dispatch({ type: FETCHING_DATA });
		promise
			.then(response => {
                console.log(response.data.results);
				dispatch({
					type: DATA_FETCH_SUCCESS,
					payload: response.data.results
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: DATA_FETCH_ERROR });
			});
	};
};
