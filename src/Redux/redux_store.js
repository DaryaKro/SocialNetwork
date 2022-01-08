import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePageReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;