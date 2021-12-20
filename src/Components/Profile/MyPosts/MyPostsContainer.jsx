import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext"

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextCreator(text));
                }

                const addPost = () => {
                    store.dispatch(addPostCreator());
                }

                return (<MyPosts updateNewPostTextCreator={onPostChange}
                                 addPostCreator={addPost}
                                 PostsData={state.profilePageReducer.PostsData}
                                 newPostText={state.profilePageReducer.newPostText}/>);
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;