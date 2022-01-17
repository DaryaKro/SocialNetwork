import obj from "./Users.module.css";
import React from "react";
import userPhoto from "../../assets/images/user.jpeg";
import {NavLink} from "react-router-dom";

const User = ({user, isFollowingInProgress, unfollowUser, followUser}) => {
    return (
        <div className={obj.user}>
            <div className={obj.userAvatar}>
                <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo"/>
                </NavLink>
            </div>
            <div className={obj.userNameAndStatus}>
                <div className={obj.userName}>{user.name}</div>
                <div className={obj.userStatus}>{user.status}</div>
            </div>
            <div className={obj.userFollow}>
                {user.followed
                    ? <button disabled={isFollowingInProgress.some((id) => id === user.id)} onClick={() => {
                        unfollowUser(user.id);
                    }} className={obj.userButtonUnfollow}>Unfollow</button>
                    : <button disabled={isFollowingInProgress.some((id) => id === user.id)} onClick={() => {
                        followUser(user.id);
                    }} className={obj.userButtonFollow}>Follow</button>}
            </div>
        </div>
    );
}


export default User;