import profilePageReducer, {addPost, deletePost} from "./profilePageReducer";

let state = {
    PostsData: [
        {id: "1", message: "Hi, how r u?", likesCount: "0"},
        {id: "2", message: "My first post", likesCount: "4"},
        {id: "3", message: "This is me", likesCount: "44"},
    ]
};

it("length of posts should be incremented", () => {
    let action = addPost("Dasha");
    let newState = profilePageReducer(state, action);
    expect(newState.PostsData.length).toBe(4);
});

it("message of new post should be correct", () => {
    let action = addPost("Dasha");
    let newState = profilePageReducer(state, action);
    expect(newState.PostsData[3].message).toBe("Dasha");
});

it("after deleting length of message should be decrement", () => {
    let action = deletePost(1);
    let newState = profilePageReducer(state, action);
    expect(newState.PostsData.length).toBe(2);
});

it("after deleting length of message shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(10);
    let newState = profilePageReducer(state, action);
    expect(newState.PostsData.length).toBe(3);
});