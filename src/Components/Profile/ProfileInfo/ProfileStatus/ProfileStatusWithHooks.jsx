import obj from "./ProfileStatus.module.css";
import {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [userStatus, setUserStatus] = useState(props.userStatus);

    useEffect(() => {
        setUserStatus(props.userStatus);
    }, [props.userStatus]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(userStatus);
    }

    const onStatusChange = (event) => {
        setUserStatus(event.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div className={obj.inactiveStatus}>
                    <span onDoubleClick={ activateEditMode }>{props.userStatus || "Tap here to make status"}</span>
                </div>
            }
            {editMode &&
                <div className={obj.activeStatus}>
                    <input onChange={ onStatusChange } onBlur={ deactivateEditMode } autoFocus={true}
                           value={userStatus} placeholder="Write your status here!" maxLength="20"/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;