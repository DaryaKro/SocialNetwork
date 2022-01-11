import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import {compose} from "redux";
import {sendMessage} from "../../Redux/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        DialogsData: state.dialogsReducer.DialogsData,
        MessagesData: state.dialogsReducer.MessagesData,
        newMessageBody: state.dialogsReducer.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessage(newMessageBody));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate)
(Dialogs);
