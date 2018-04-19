import { combineReducers } from "redux";
import { starWarsReducer } from "./starWarsReducer";

const rootReducer = combineReducers({
  starWarsReducer
});

export default rootReducer;
