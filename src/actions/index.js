import axios from 'axios';
export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_SUCCESS = ' REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const fetchCharacters = () => (dispatch) => {
	dispatch({ type: REQUEST_DATA });
	axios
		.get('https://www.swapi.co/api/people')
		//must add www. or will get CORS Error
		.then((response) => {
			console.log(response.data);
			dispatch({ type: REQUEST_SUCCESS, payload: response.data.results });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
