// import obj from "./Profile.module.css";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
      <div>
          <ProfileInfo userProfile={props.userProfile}/>
          <MyPostsContainer/>
      </div>
    );
}

export default Profile;