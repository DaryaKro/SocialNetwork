import {usersAPI} from "../api/api";

const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
    UsersData: [ ],
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
                UsersData: state.UsersData.map( (u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                UsersData: state.UsersData.map( (u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                UsersData: action.UsersData,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userID]
                    : state.isFollowingInProgress.filter((id) => id != action.userID),
            }
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

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const getCurrentPageNumber = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        });
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        usersAPI.deleteFollowing(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId));
        });
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        usersAPI.createFollowing(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId));
        });
    }
};

export default usersReducer;
