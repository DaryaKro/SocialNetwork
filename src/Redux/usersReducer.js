const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    UsersData: [ ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                UsersData: state.UsersData.map( (u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
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
                UsersData: [...state.UsersData, ...action.UsersData]
            }
        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID: userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID: userID })
export const setUsersAC = (UsersData) => ({ type: SET_USERS, UsersData: UsersData })

export default usersReducer;
