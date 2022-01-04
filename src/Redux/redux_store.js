import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePageReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
});

let store = createStore(reducers);

export default store;