import obj from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpeg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({userProfile, userStatus, updateUserStatus, isOwner, savePhoto}) => {
    if (!userProfile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={obj.profileImg}>
                <img
                    src="https://images.pexels.com/photos/141784/pexels-photo-141784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="profile photo"/>
            </div>
            <div className={obj.descriptionBlock}>
                <div className={obj.avatarImg}>
                    <img src={userProfile.photos.large != null ? userProfile.photos.large : userPhoto} alt="userPhoto"/>
                </div>
                <div className={obj.userDescription}>
                    <div className={obj.userName}>{userProfile.fullName}</div>
                    <ProfileStatusWithHooks userStatus={userStatus} updateUserStatus={updateUserStatus}/>
                    {isOwner && <input onChange={onMainPhotoSelected} type={"file"}/> }
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;