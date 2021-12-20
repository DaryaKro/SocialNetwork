import obj from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    const PostsElements = props.PostsData.map( (p) => <Post message={p.message} likesCount={p.likesCount}/> );

    const onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostTextCreator(text);
    }

    const onAddPost = () => {
        props.addPostCreator();
    }

    return (
        <div className={obj.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={obj.postTextarea}>
                    <textarea onChange={ onPostChange } placeholder="Create your new post!" value={ props.newPostText }/>
                </div>
                <div className={obj.postsButton}>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div>
                { PostsElements }
            </div>
        </div>
    );
}

export default MyPosts;