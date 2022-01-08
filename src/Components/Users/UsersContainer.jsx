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

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getCurrentPageNumber(pageNumber, this.props.pageSize);
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
        UsersData: state.usersReducer.UsersData,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        isFollowingInProgress: state.usersReducer.isFollowingInProgress,
    }
}

export default connect(mapStateToProps,
    {followUser, unfollowUser, toggleIsFollowingInProgress,
        getUsers, getCurrentPageNumber})(UsersContainer);

