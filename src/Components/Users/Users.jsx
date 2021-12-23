import obj from "./Users.module.css";

const Users = (props) => {
    debugger
    if (props.UsersData.length === 0) {
        props.setUsers([
            {
                id: "1",
                photoURL: "https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                followed: false,
                fullName: "Dasha",
                status: "H",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: "2",
                photoURL: "https://images.pexels.com/photos/2894948/pexels-photo-2894948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                fullName: "Pasha",
                status: "E",
                location: {city: "Kazan", country: "Russia"}
            },
            {
                id: "3",
                photoURL: "https://images.pexels.com/photos/7073078/pexels-photo-7073078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                followed: false,
                fullName: "Masha",
                status: "L",
                location: {city: "Vladivostok", country: "Russia"}
            },
            {
                id: "4",
                photoURL: "https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                followed: false,
                fullName: "Dmitriy",
                status: "L",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: "5",
                photoURL: "https://images.pexels.com/photos/7073078/pexels-photo-7073078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                followed: true,
                fullName: "Slava",
                status: "O",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: "6",
                photoURL: "https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                followed: false,
                fullName: "Vladislav",
                status: "!",
                location: {city: "Krasnodar", country: "Russia"}
            },
        ])
    }
    debugger;
    return (
        <div className={obj.users}>
            {
                props.UsersData.map((u) =>
                    <div key={u.id}>
                        <span>
                            <div className={obj.userAvatar}>
                                <img src={u.photoURL} alt="photo"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    );
    debugger;
}

export default Users;