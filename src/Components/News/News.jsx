import obj from "./News.module.css";
import smiling from "../../assets/images/hedgehog.jpeg";

const News = (props) => {
    return (
        <div className={obj.newsPage}>
            <div>
                News
            </div>
            <div>
                Page under construction
            </div>
            <img src={smiling} alt="smiling" className={obj.smiling}/>
        </div>
    );
}

export default News;