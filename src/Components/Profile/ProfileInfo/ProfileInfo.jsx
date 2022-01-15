import obj from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpeg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader />
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
                    <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : userPhoto} alt="userPhoto"/>
                    {/*<img src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar"/>*/}
                </div>
                <div className={obj.userDescription}>
                    {/*<div>Name: Dasha</div>*/}
                    {/*<div>Surname: Undefined</div>*/}
                    {/*<div>Education: University</div>*/}
                    {/*<div>City: Moscow</div>*/}
                    <div className={obj.userName}>{props.userProfile.fullName}</div>
                    <ProfileStatusWithHooks userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;