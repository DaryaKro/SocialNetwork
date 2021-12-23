import obj from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className={obj.nav}>
            <div>
                <NavLink to="/profile" className={item => item.isActive ? obj.active : obj.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={item => item.isActive ? obj.active : obj.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={item => item.isActive ? obj.active : obj.item}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={item => item.isActive ? obj.active : obj.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/users" className={item => item.isActive ? obj.active : obj.item}>Users</NavLink>
            </div>
            <div className={obj.separator}></div>
            <div>
                <NavLink to="/settings" className={item => item.isActive ? obj.active : obj.item}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;