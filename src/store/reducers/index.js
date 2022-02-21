import { combineReducers } from "redux";
import counterReducer  from "./counterReducer";
import loggedReducer from "./loggedReducer";

const rootReducer = combineReducers({
    isLogged: loggedReducer,
    counter: counterReducer
});

export default rootReducer;