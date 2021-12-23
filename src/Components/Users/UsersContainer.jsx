import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        UsersData: state.usersReducer.UsersData,
    }
}

debugger;
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (UsersData) => {
            dispatch(setUsersAC(UsersData));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;