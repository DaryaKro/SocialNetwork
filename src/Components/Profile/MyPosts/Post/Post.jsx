import obj from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={obj.item}>
            <div className={obj.post}>
                <img
                    src="https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="ava"/>
                <span className={obj.postText}>{props.message}</span>
            </div>
            <div className={obj.postLikes}>
                {`${props.likesCount} \u2665`}
            </div>
        </div>
    );
}

export default Post;