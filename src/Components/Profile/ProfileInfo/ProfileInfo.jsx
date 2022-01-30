import obj from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpeg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({userProfile, userStatus, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    if (!userProfile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
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
                    {isOwner && <input onChange={onMainPhotoSelected} type={"file"}/>}
                </div>

                <div className={obj.userDescription}>
                    <ProfileStatusWithHooks userStatus={userStatus} updateUserStatus={updateUserStatus}/>

                    {editMode
                        ? <ProfileDataForm initialValues={userProfile} userProfile={userProfile} onSubmit={onSubmit}/>
                        : <ProfileData userProfile={userProfile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}
                </div>
            </div>
        </div>
    );
}

const ProfileData = ({userProfile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div>
                {isOwner && <button onClick={goToEditMode}>edit</button>}
            </div>
            <div className={obj.userName}>{userProfile.fullName}</div>
            <div>
                <div>
                    <b>Looking for a job:</b> {userProfile.lookingForAJob ? "Yes" : "No"}
                </div>
                <div>
                    <b>My professional skills:</b>{userProfile.lookingForAJobDescription}
                </div>
                <div>
                    <b>About me:</b> {userProfile.aboutMe}
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(userProfile.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={userProfile.contacts.key}/>
                })}
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    );
}

export default ProfileInfo;