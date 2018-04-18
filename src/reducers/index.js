import { combineReducers } from "redux";
import charsReducer from "./starWarsReducer";

const rootReducer = combineReducers({
  char: { charsReducer }
  //not sure if it should be chars: or not
});

export default rootReducer;
