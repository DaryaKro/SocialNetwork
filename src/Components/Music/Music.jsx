import obj from "./Music.module.css";
import smiling from "../../assets/images/hedgehog.jpeg";

const Music = (props) => {
    return (
        <div className={obj.musicPage}>
            <div>
                Music
            </div>
            <div>
                Page under construction
            </div>
            <img src={smiling} alt="smiling" className={obj.smiling}/>
        </div>
    );
}

export default Music;