// import obj from "./Profile.module.css";
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../Redux/profilePageReducer";
import {useParams} from "react-router-dom";

//?what happen, can't see params in console
const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    return (
        <WrappedComponent {...props} params = {params}/>
    );
};

class ProfileContainer extends React.Component {
    componentDidMount() {
       this.props.getUserProfile(this.props.params.userId);
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePageReducer.userProfile,
})

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(WithURLDataContainerComponent);