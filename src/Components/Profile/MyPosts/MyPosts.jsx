import obj from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength15, requiredField} from "../../../utils/validators";
import {Element} from "../../common/FormsControls/FormsControls";

const Textarea = Element("textarea");

const MyPosts = (props) => {

    const PostsElements = props.PostsData.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addNewPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={obj.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={addNewPost}/>
            </div>
            <div>
                { PostsElements }
            </div>
        </div>
    );
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={obj.postTextarea}>
                <Field placeholder="Create your new post!" component={Textarea}
                       validate={[requiredField, maxLength15]} name={"newPostText"}/>
            </div>
            <div className={obj.postsButton}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: "newPost"})(PostForm);

export default MyPosts;