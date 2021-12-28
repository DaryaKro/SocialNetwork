import obj from "./Users.module.css";
import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/user.jpeg";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                console.log(response.data.items);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={obj.users}>
                {
                    this.props.UsersData.map((u) =>
                        <div key={u.id}>
                        <span>
                            <div className={obj.userAvatar}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="photo"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

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
}

export default Users;