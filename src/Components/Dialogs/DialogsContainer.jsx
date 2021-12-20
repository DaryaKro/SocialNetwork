import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    <StoreContext.Consumer>
        {store => {
            let state = store.getState();

            const onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }

            return (<Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                             sendMessageCreator={onSendMessageClick}
                             DialogsData={state.dialogsReducer.DialogsData}
                             MessagesData={state.dialogsReducer.MessagesData}
                             newMessageBody={state.dialogsReducer.newMessageBody}/>);
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;