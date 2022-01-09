import React from "react";
import obj from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={obj.inactiveStatus}>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={obj.activeStatus}>
                        <input onBlur={ this.deactivateEditMode } autoFocus={true} value={this.props.status} maxLength="10"/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;