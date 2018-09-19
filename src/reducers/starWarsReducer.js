import { FETCHING,FETCHED,FETCHERR } from '../actions';

const initialState = {
  chars:[],
  fetching:true,
  fetched:false,
  error:null,
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
	case FETCHING:
	console.log('fetching');
		return(
		{...state,fetching:true,fetched:false,error:null}
		);
	case FETCHED:
	console.log(action.payload);
		return(
		{...state,fetching:false,fetched:true,error:null,chars:action.payload}
		);
	case FETCHERR:
	console.log('error');
		return(
		{...state,fetching:false,fetched:false,error:true}
		)
    default:
      return state;
  }
};
