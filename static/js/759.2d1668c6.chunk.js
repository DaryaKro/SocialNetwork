"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[759],{759:function(s,e,a){a.r(e),a.d(e,{default:function(){return v}});var n={dialogs:"Dialogs_dialogs__gcTnY",dialogItems:"Dialogs_dialogItems__fuwq6",messages:"Dialogs_messages__IXYb-",messageItems:"Dialogs_messageItems__7NSM9",messageInputSend:"Dialogs_messageInputSend__FW2ab",messageGrid:"Dialogs_messageGrid__89Jfm",messageTextarea:"Dialogs_messageTextarea__8OubR",messageButton:"Dialogs_messageButton__kAwK6"},i="DialogItem_dialogName__FrTAy",t="DialogItem_dialogIcon__COvH6",o=a(3504),g=a(184),l=function(s){var e="/dialogs/"+s.id;return(0,g.jsx)("div",{className:t,children:(0,g.jsxs)(o.OL,{to:e,children:[(0,g.jsx)("img",{src:"https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"ava"}),(0,g.jsx)("span",{className:i,children:s.name})]})})},d=function(s){return(0,g.jsx)("div",{children:s.message})},m=a(6871),r=a(6139),c=a(704),u=a(8610),_=(0,a(6268).W)("textarea"),x=(0,c.Z)({form:"dialogsAddMessage"})((function(s){return(0,g.jsx)("form",{onSubmit:s.handleSubmit,className:n.messageForm,children:(0,g.jsxs)("div",{className:n.messageGrid,children:[(0,g.jsx)("div",{className:n.messageTextarea,children:(0,g.jsx)(r.Z,{type:"text",placeholder:"Enter message",component:_,name:"newMessageBody",validate:[u.lp,u.cE]})}),(0,g.jsx)("div",{className:n.messageButton,children:(0,g.jsx)("button",{children:"Send"})})]})})})),h=function(s){var e=s.DialogsData.map((function(s){return(0,g.jsx)(l,{name:s.name,id:s.id})})),a=s.MessagesData.map((function(s){return(0,g.jsx)(d,{message:s.message})}));if(!s.isAuth)return(0,g.jsx)(m.Fg,{to:"/login"});return(0,g.jsxs)("div",{className:n.dialogs,children:[(0,g.jsx)("div",{className:n.dialogItems,children:e}),(0,g.jsxs)("div",{className:n.messages,children:[(0,g.jsx)("div",{className:n.messageItems,children:a}),(0,g.jsx)("div",{className:n.messageInputSend,children:(0,g.jsx)(x,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})})]})]})},j=a(364),p=(a(2791),a(2291)),f=a(7781),D=a(7666),v=(0,f.qC)((0,j.$j)((function(s){return{DialogsData:s.dialogsReducer.DialogsData,MessagesData:s.dialogsReducer.MessagesData,newMessageBody:s.dialogsReducer.newMessageBody}}),(function(s){return{sendMessage:function(e){s((0,D.b)(e))}}})),p.Z)(h)}}]);
//# sourceMappingURL=759.2d1668c6.chunk.js.map