import obj from "./Users.module.css";
import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/user.jpeg";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const Pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            Pages.push(i);
        }

        return (
            <div className={obj.users}>
                <div>
                    {Pages.map((p) => {
                        return (
                            <span className={this.props.currentPage === p && obj.selected}
                                  onClick={() => {this.onPageChanged(p)}}>
                                {p + " "}
                            </span>
                        )
                    })}
                </div>
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