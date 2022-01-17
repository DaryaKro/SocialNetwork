import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectsHelpers";

const FOLLOW_SUCCESS = "userReducer/FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "userReducer/UNFOLLOW_SUCCESS";
const SET_USERS = "userReducer/SET_USERS";
const SET_CURRENT_PAGE = "userReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "userReducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "userReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "userReducer/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

const initialState = {
    UsersData: [],
    totalUsersCount: 0,
    pageSize: 6,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                UsersData: updateObjectInArray(state.UsersData, action.userID, "id", {followed: true})
            };
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                UsersData: updateObjectInArray(state.UsersData, action.userID, "id", {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                UsersData: action.UsersData,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userID]
                    : state.isFollowingInProgress.filter((id) => id !== action.userID),
            };
        default:
            return state;
    }
};

export const followSuccess = (userID) => ({ type: FOLLOW_SUCCESS, userID: userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW_SUCCESS, userID: userID });
export const setUsers = (UsersData) => ({ type: SET_USERS, UsersData: UsersData });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleIsFollowingInProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching: isFetching, userID: userID });

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const getCurrentPageNumber = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    const data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingInProgress(false, userId));
}

export const unfollowUser = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.deleteFollowing.bind(usersAPI), unfollowSuccess);
}

export const followUser = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.createFollowing.bind(usersAPI), followSuccess);
}

export default usersReducer;
