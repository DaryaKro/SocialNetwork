// import obj from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}
                         userStatus={props.userStatus}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;