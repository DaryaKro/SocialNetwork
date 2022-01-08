import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import React from "react";
import withAuthNavigate from "../../hoc/withAuthNavigate";

const AuthNavigateComponent = withAuthNavigate(Dialogs);

const mapStateToProps = (state) => {
    return {
        DialogsData: state.dialogsReducer.DialogsData,
        MessagesData: state.dialogsReducer.MessagesData,
        newMessageBody: state.dialogsReducer.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);

export default DialogsContainer;