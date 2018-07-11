import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";


export const fetchingac = () => {
	const request = axios.get('https://swapi.co/api/people/');	
  	
	return (dispatch) => {
      	request.then(({data}) => {
      	dispatch({type: FETCHING, names: data.results});
    })

    	.catch(err => {
      	dispatch({type: ERROR, error: err});

    });
  };
};


export const fetchedAction = () => {
const request = axios.get('https://swapi.co/api/people/');
        return (dispatch) => {
                request.then(({data}) => {
		dispatch({type: FETCHED, names: data.results});
        })

	.catch(err => { 
        dispatch({type: ERROR, error: err});
    
    });
  };
};


export const errorAction =() =>{
	return (dispatch) => {
        dispatch({type: ERROR});
	
	}
	};
	  
	 	
