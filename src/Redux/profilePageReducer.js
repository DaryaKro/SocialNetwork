import {usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    PostsData: [
        {id: "1", message: "Hi, how r u?", likesCount: "0"},
        {id: "2", message: "My first post", likesCount: "4"},
        {id: "3", message: "This is me", likesCount: "44"},
    ],
    newPostText: "It's my new post",
    userProfile: null,
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "4",
                message: state.newPostText,
                likesCount: "0",
            };
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: "",
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile,
            };
        default:
            return state;
    }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile: userProfile });

export const getUserProfile = (userId) => (dispatch) => {
    if (!userId) {
        userId = 21526;
    }
    usersAPI.showProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export default profilePageReducer;
