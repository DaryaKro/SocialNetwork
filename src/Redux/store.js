import dialogsReducer from "./dialogsReducer";
import profilePageReducer from "./profilePageReducer";

let store = {
    _state: {
        ProfilePage: {
            PostsData: [
                {id: "1", message: "Hi, how r u?", likesCount: "0"},
                {id: "2", message: "My first post", likesCount: "4"},
                {id: "3", message: "This is me", likesCount: "44"},
            ],
            newPostText: "It's my new post",
        },
        DialogsPage: {
            DialogsData: [
                {id: 1, name: "Dasha"},
                {id: 2, name: "Masha"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Tasha"},
                {id: 5, name: "Kasha"},
                {id: 6, name: "Pasha"},
            ],
            MessagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How r u?"},
                {id: 3, message: "I like pizza"},
                {id: 4, message: "Bye"},
            ],
            newMessageBody: "",
        },
    },

    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.ProfilePage = profilePageReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;
