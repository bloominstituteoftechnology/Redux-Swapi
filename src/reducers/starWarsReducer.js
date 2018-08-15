import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};
// I created the properties specified in the instructions and didn't have much trouble with this part since it basically told me exactly what to do.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
   
  case FETCHING:
    return Object.assign({},state, {fetching: true});

  case FETCHED:
    return Object.assign({}, state, {
      chars: state.chars.concat(action.payload),
      fetching: false,
      fetched: true
    });

  case ERROR:
    return Object.assign({}, state, {
      fetching:false,
      error: action.payload
    });
    
    default:
      return state;
  }
};

// There were comments in here that pretty explicitly told me what to do, which was to create reducers for my actions. This is like what we did with the Todo so I was comfortable with this part.
