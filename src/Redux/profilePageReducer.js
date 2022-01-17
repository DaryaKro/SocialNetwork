import {profileAPI} from "../api/api";

const ADD_POST = "profilePageReducer/ADD_POST";
const SET_USER_PROFILE = "profilePageReducer/SET_USER_PROFILE";
const SET_USER_STATUS = "profilePageReducer/SET_USER_STATUS";
const DELETE_POST = "profilePageReducer/DELETE_POST";

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
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText: newPostText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile: userProfile });
export const setUserStatus = (userStatus) => ({ type: SET_USER_STATUS, userStatus: userStatus });
export const deletePost = (userId) => ({ type: DELETE_POST, userId: userId });

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

export default profilePageReducer;
