import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, setUserProfile, updateUserStatus} from "../../Redux/profilePageReducer";
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
    componentDidMount() {
        this.props.getUserProfile(this.props.params.userId);
        this.props.getUserStatus(this.props.params.userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     userProfile={this.props.userProfile}
                     userStatus={this.props.userStatus}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePageReducer.userProfile,
    userStatus: state.profilePageReducer.userStatus,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthNavigate)
(ProfileContainer);