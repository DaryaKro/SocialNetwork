import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: {userId, login, email, isAuth} });

export const getProfile = () => (dispatch) => {
    authAPI.getAuthorization().then(data => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getProfile());
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;
