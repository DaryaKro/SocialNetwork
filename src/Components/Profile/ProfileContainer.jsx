// import obj from "./Profile.module.css";
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profilePageReducer";
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
        let userId = this.props.params.userId;
        if (!userId){
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                console.log(response.data);
                this.props.setUserProfile(response.data);
            });
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
console.log(WithURLDataContainerComponent);

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);