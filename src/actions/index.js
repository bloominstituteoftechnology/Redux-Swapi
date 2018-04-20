import axios from 'axios';

export const FETCHING_CHARS = 'FETCHING_CHARS';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';
export const CHARS_FETCHED = 'CHARS_FETCHED';


// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middleware"
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based

export const fetchChars = () => {
	const starWarsChars = axios.get(`https://swapi.co/api/people/`);
	return dispatch => {
		dispatch({ type: FETCHING_CHARS });
		starWarsChars
			.then(response => {
				dispatch({ type: CHARS_FETCHED, payload: response.data.results });
			}).catch(err => {
				dispatch({
					type: ERROR_FETCHING_CHARS, 
					payload: 'Error Fetching Chars'
				});
			});
	};
};


