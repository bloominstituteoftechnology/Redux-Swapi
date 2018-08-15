import {FETCHING, FETCHED, ERROR} from '../actions';
const initialState = {
  chars: [],
  loading: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return {...state, 
      loading: true
    }

    case FETCHED:
    return {...state, 
      chars: [...state.chars, ...action.payload],
      loading: false
    }

    case ERROR:
    return { ...state, 
      loading: false,
      error: 'ohhhh noo'
    }

    default:
      return state;
  }
};
