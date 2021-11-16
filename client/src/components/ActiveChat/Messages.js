import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId} = props;
  let lastMessageBySender = null;
  
  for(let i=messages.length-1; i>=0; i--){
    let currentMessage = messages[i];
    if(currentMessage.seen && currentMessage.senderId === userId){
      lastMessageBySender = currentMessage;
      break;
    }
  }

  return (
    <Box>
      {messages.map((message) => { 
        const time = moment(message.createdAt).format("h:mm");
        if (message.senderId === userId){
          return lastMessageBySender && lastMessageBySender.id === message.id ? 
          <SenderBubble key={message.id} text={message.text} time={time} seenPhoto={otherUser.photoUrl} /> : 
          <SenderBubble key={message.id} text={message.text} time={time} />
        }else{
          return <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        }
      })}
    </Box>
  );
};

export default Messages;
