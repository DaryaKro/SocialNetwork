import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        DialogsData: state.dialogsReducer.DialogsData,
        MessagesData: state.dialogsReducer.MessagesData,
        newMessageBody: state.dialogsReducer.newMessageBody,
        isAuth: state.authReducer.isAuth,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;