import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {updateNewPostTextCreator, addPostCreator} from "../../../Redux/profilePageReducer";

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState();
//
//                 const onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextCreator(text));
//                 }
//
//                 const addPost = () => {
//                     store.dispatch(addPostCreator());
//                 }
//
//                 return (<MyPosts updateNewPostTextCreator={onPostChange}
//                                  addPostCreator={addPost}
//                                  PostsData={state.profilePageReducer.PostsData}
//                                  newPostText={state.profilePageReducer.newPostText}/>);
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        PostsData: state.profilePageReducer.PostsData,
        newPostText: state.profilePageReducer.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextCreator: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPostCreator: () => {
            dispatch(addPostCreator());
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;