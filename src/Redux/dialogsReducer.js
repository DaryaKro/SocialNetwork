const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                MessagesData: [...state.MessagesData, {id: 5, message: body}],
            };
        }
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody: newMessageBody });

export default dialogsReducer;