import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../Redux/profilePageReducer";
import {useParams} from "react-router-dom";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import {compose} from "redux";

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    return (
        <WrappedComponent {...props} params={params}/>
    );
};

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (this.props.params.userId !== prevProps.params.userId) {
            this.refreshProfile();
        // }
    }

    render() {
        return (
            <Profile {...this.props}
                     userProfile={this.props.userProfile}
                     userStatus={this.props.userStatus}
                     updateUserStatus={this.props.updateUserStatus}
                     isOwner={!this.props.params.userId}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePageReducer.userProfile,
    userStatus: state.profilePageReducer.userStatus,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withAuthNavigate)
(ProfileContainer);