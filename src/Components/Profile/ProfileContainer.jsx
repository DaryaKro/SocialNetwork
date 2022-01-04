// import obj from "./Profile.module.css";
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profilePageReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePageReducer.userProfile,
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);