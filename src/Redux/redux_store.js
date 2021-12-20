import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
    profilePageReducer,
    dialogsReducer,
});


let store = createStore(reducers);

export default store;