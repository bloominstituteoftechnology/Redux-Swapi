
import axios from 'axios'; 

export const fetchingData = () => {
    const request = axios.get("https://swapi.co/api/people/");
    return(dispatch) =>{
        request.then(({data}) => {
            dispatch({type: 'FETCHED_DATA', payload: data});
        }).catch(err => {
            dispatch({type:"ERROR_FETCHING", payload: err})
        })
    }
};

