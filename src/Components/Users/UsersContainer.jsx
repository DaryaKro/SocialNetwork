import {connect} from "react-redux";
import React from "react";
import {
    followUser,
    getCurrentPageNumber,
    getUsers,
    toggleIsFollowingInProgress,
    unfollowUser,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getCurrentPageNumber(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                <Users totalUsersCount = {this.props.totalUsersCount}
                       pageSize = {this.props.pageSize}
                       currentPage = {this.props.currentPage}
                       isFollowingInProgress = {this.props.isFollowingInProgress}
                       onPageChanged = {this.onPageChanged}
                       UsersData = {this.props.UsersData}
                       unfollowUser = {this.props.unfollowUser}
                       followUser = {this.props.followUser}
                       toggleIsFollowingInProgress = {this.props.toggleIsFollowingInProgress}/>
                { this.props.isFetching ? <Preloader/> : null }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        UsersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {followUser, unfollowUser, toggleIsFollowingInProgress,
            getUsers, getCurrentPageNumber}))
(UsersContainer);