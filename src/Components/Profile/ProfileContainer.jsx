// import obj from "./Profile.module.css";
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../Redux/profilePageReducer";
import {useParams} from "react-router-dom";
import withAuthNavigate from "../../hoc/withAuthNavigate";

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

let AuthNavigateComponent = withAuthNavigate(ProfileContainer);

const mapStateToProps = (state) => ({
    userProfile: state.profilePageReducer.userProfile,
})

let WithURLDataContainerComponent = withRouter(AuthNavigateComponent);

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(WithURLDataContainerComponent);