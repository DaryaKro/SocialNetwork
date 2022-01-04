import {connect} from "react-redux";
import React from "react";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingInProgress,
    unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
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
                       unfollow = {this.props.unfollow}
                       follow = {this.props.follow}
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID));
//         },
//         setUsers: (UsersData) => {
//             dispatch(setUsersAC(UsersData));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     }
// }

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
        toggleIsFetching, toggleIsFollowingInProgress})(UsersContainer);

