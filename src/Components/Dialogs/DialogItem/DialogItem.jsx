import obj from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={obj.dialogIcon}>
            <NavLink to={path}>
                <img src="https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="ava"/>
                <span className={obj.dialogName}>
                    {props.name}
                </span>
            </NavLink>
        </div>
    );
}

export default DialogItem;