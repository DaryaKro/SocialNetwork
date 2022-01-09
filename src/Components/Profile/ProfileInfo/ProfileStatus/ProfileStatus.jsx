import React from "react";
import obj from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.userStatus);
    }

    onStatusChange = (event) => {
        this.setState({
            userStatus: event.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={obj.inactiveStatus}>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.userStatus || "Tap here to make status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={obj.activeStatus}>
                        <input onChange={ this.onStatusChange } onBlur={ this.deactivateEditMode } autoFocus={true} value={this.state.userStatus}
                               placeholder="Write your status here!" maxLength="20"/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;