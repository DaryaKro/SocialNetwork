import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPost} from "../../../Redux/profilePageReducer";

const mapStateToProps = (state) => {
    return {
        PostsData: state.profilePageReducer.PostsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;