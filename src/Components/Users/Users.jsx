import obj from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    console.log(props.totalUsersCount);
    return (
        <div className={obj.users}>
            {props.UsersData.map((u) =>
                <User key={u.id}
                      user={u}
                      isFollowingInProgress={props.isFollowingInProgress}
                      unfollowUser={props.unfollowUser}
                      followUser={props.followUser}/>)
            }
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       portionSize="10"/>
        </div>
    );
}


export default Users;