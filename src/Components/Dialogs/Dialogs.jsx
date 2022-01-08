import obj from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {

    const dialogsItems = props.DialogsData.map( (d) => <DialogItem name={d.name} id={d.id}/> );
    const messagesItems = props.MessagesData.map( (m) => <MessageItem message={m.message}/> );
    const newMessageBody = props.newMessageBody;

    const onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBodyCreator(body);
    }

    const onSendMessageClick = () => {
        props.sendMessageCreator();
    }

    if (!props.isAuth) {
        return <Navigate to="/login"/>;
    }

    return (
        <div className={obj.dialogs}>
            <div className={obj.dialogItems}>
                { dialogsItems }
            </div>
            <div className={obj.messages}>
                <div>
                    { messagesItems }
                </div>
                <div className={obj.messageInputSend}>
                    <span className={obj.messageTextarea}>
                        <textarea onChange={ onNewMessageChange } placeholder="Enter your message" value={ newMessageBody }/>
                    </span>
                    <span className={obj.messageButton}>
                        <button onClick={ onSendMessageClick }>Send message</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;