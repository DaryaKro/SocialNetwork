export const getUsersData = (state) => {
    return state.usersReducer.UsersData;
}

export const getPageSize = (state) => {
    return state.usersReducer.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersReducer.isFetching;
}

export const getIsFollowingInProgress = (state) => {
    return state.usersReducer.isFollowingInProgress;
}
