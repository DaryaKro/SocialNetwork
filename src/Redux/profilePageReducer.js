import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "profilePageReducer/ADD_POST";
const SET_USER_PROFILE = "profilePageReducer/SET_USER_PROFILE";
const SET_USER_STATUS = "profilePageReducer/SET_USER_STATUS";
const DELETE_POST = "profilePageReducer/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profilePageReducer/SAVE_PHOTO_SUCCESS";

let initialState = {
    PostsData: [
        {id: "1", message: "Hi, how r u?", likesCount: "0"},
        {id: "2", message: "My first post", likesCount: "4"},
        {id: "3", message: "This is me", likesCount: "44"},
    ],
    userProfile: null,
    userStatus: "",
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: "0",
            };
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus,
            };
        case DELETE_POST:
            return {
                ...state,
                PostsData: [...state.PostsData].filter((u) => u.id !== action.userId),
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: {...state.userProfile, ptotos: action.ptotos},
            };
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText: newPostText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile: userProfile });
export const setUserStatus = (userStatus) => ({ type: SET_USER_STATUS, userStatus: userStatus });
export const deletePost = (userId) => ({ type: DELETE_POST, userId: userId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos: photos });

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (userStatus) => async (dispatch) => {
    const response = await profileAPI.updateStatus(userStatus);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(userStatus));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (userProfile) => async (dispatch, getState) => {
    const userId = getState().authReducer.userId;
    const response = await profileAPI.saveProfile(userProfile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profilePageReducer;
