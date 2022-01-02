import obj from "./Settings.module.css";
import smiling from "../../assets/images/hedgehog.jpeg";

const Settings = (props) => {
    return (
        <div className={obj.settingsPage}>
            <div>
                Settings
            </div>
            <div>
                Page under construction
            </div>
            <img src={smiling} alt="smiling" className={obj.smiling}/>
        </div>
    );
}

export default Settings;