import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                 let state = store.getState();
//
//                 const onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }
//
//                 const onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
//
//                 return (<Dialogs updateNewMessageBodyCreator={onNewMessageChange}
//                                  sendMessageCreator={onSendMessageClick}
//                                  DialogsData={state.dialogsReducer.DialogsData}
//                                  MessagesData={state.dialogsReducer.MessagesData}
//                                  newMessageBody={state.dialogsReducer.newMessageBody}/>);
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;