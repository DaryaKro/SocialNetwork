import obj from "./Users.module.css";
import React from "react";
import userPhoto from "../../assets/images/user.jpeg";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let Pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        Pages.push(i);
    }

    // page display, on my own
    if (props.currentPage <= 5 || props.currentPage === "...") {
        Pages.splice(10);
        Pages.push("...");
    } else {
        Pages.splice(0, props.currentPage - 5, "...");
        Pages.splice(10);
        // Pages.unshift("...");
        Pages.push("...");
    }
    //

    return (
        <div className={obj.users}>
            {props.UsersData.map((u) =>
                <div key={u.id} className={obj.user}>
                    <div className={obj.userAvatar}>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="photo"/>
                        </NavLink>
                    </div>
                    <div className={obj.userNameAndStatus}>
                        <div className={obj.userName}>{u.name}</div>
                        <div className={obj.userStatus}>{u.status}</div>
                    </div>
                    <div className={obj.userFollow}>
                        {u.followed
                            ? <button disabled={props.isFollowingInProgress.some((id) => id === u.id)} onClick={() => {
                                    props.unfollowUser(u.id);
                                }}
                            className={obj.userButtonUnfollow}>Unfollow</button>
                            : <button disabled={props.isFollowingInProgress.some((id) => id === u.id)} onClick={() => {
                                    props.followUser(u.id);
                                }}
                            className={obj.userButtonFollow}>Follow</button>}
                    </div>
                </div>)
            }
            <div className={obj.pages}>
                {Pages.map((p) => {
                    return (
                        <span className={props.currentPage === p && obj.selected}
                              onClick={() => {
                                  props.onPageChanged(p)
                              }}>
                            {p + " "}
                        </span>
                    )
                })}
                <div className={obj.separator}></div>
            </div>
        </div>
    );
}


export default Users;