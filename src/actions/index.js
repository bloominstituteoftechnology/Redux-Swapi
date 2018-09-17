import axios from "axios";

export const FETCHING_STARWARS = "FETCHING_STARWARS";
export const STARWARS_FETCH_SUCCESS = "STARWARS_FETCH_SUCCESS";
export const STARWARS_FETCH_ERROR = "STARWARS_FETCH_ERROR";

export const fetchStarWars = () => {
	const promise = axios.get('https://swapi.co/api/people/')
	return dispatch => {
		dispatch({type: FETCHING_STARWARS});
		promise
			.then(response => {
				dispatch({type: STARWARS_FETCH_SUCCESS, payload: response.data.results})
			})
			.catch(err => {
				console.log(err);
				dispatch({type: STARWARS_FETCH_ERROR})
			})
	}
}

