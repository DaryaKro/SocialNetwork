const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
    PostsData: [
        {id: "1", message: "Hi, how r u?", likesCount: "0"},
        {id: "2", message: "My first post", likesCount: "4"},
        {id: "3", message: "This is me", likesCount: "44"},
    ],
    newPostText: "It's my new post",
};

const profilePageReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "4",
                message: state.newPostText,
                likesCount: "0",
            };
            state.PostsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profilePageReduce;
