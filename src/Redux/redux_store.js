import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePageReducer,
    dialogsReducer,
    usersReducer,
});

let store = createStore(reducers);

export default store;