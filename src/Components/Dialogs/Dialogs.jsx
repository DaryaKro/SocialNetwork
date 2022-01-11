import obj from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLength30, requiredField} from "../../utils/validators";
import {Element} from "../common/FormsControls/FormsControls";

const Textarea = Element("textarea");

const Dialogs = (props) => {

    const dialogsItems = props.DialogsData.map( (d) => <DialogItem name={d.name} id={d.id}/> );
    const messagesItems = props.MessagesData.map( (m) => <MessageItem message={m.message}/> );

    if (!props.isAuth) {
        return <Navigate to="/login"/>;
    }

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
                    <MessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={obj.messageForm}>
            <span className={obj.messageTextarea}>
                <Field type="text" placeholder={"Enter message"}
                       component={Textarea} name={"newMessageBody"}
                       validate={[requiredField, maxLength30]}/>
            </span>
            <span className={obj.messageButton}>
                <button>Send</button>
            </span>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: "dialogsAddMessage"})(MessageForm);

export default Dialogs;