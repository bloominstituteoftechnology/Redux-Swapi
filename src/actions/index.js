import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";


export const fetchingAction = () => {
	const request = axios.get('https://swapi.co/api/people/');	
  	
	return (dispatch) => {
	dispatch({type: FETCHING});
	
      	request.then(({data}) => {
      	dispatch({type: FETCHED, names: data.results});
    })

    	.catch(err => {
      	dispatch({type: ERROR, error: err});

    });
  };
};


	 	
