import obj from "./Users.module.css";
import React from "react";
import userPhoto from "../../assets/images/user.jpeg";

const Users = (props) => {
    console.log(props);
    debugger;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let Pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        Pages.push(i);
    }

    return (
        <div className={obj.users}>
            <div>
                {Pages.map((p) => {
                    return (
                        <span className={props.currentPage === p && obj.selected}
                              onClick={() => {props.onPageChanged(p)}}>
                            {p + " "}
                        </span>
                    )
                })}
            </div>
            {
                props.UsersData.map((u) =>
                    <div key={u.id}>
                        <span>
                            <div className={obj.userAvatar}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="photo"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            {/*<span>*/}
                            {/*    <div>{"u.location.country"}</div>*/}
                            {/*    <div>{"u.location.city"}</div>*/}
                            {/*</span>*/}
                        </span>
                    </div>)
            }
        </div>
    );
}


export default Users;