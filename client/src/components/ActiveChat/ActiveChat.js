import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Input, Header, Messages } from "./index";
import { connect } from "react-redux";
import { updateUnseenMessageCount} from "../../store/utils/thunkCreators";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 8,
    flexDirection: "column"
  },
  chatContainer: {
    marginLeft: 41,
    marginRight: 41,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between"
  }
}));

const ActiveChat = (props) => {
  const classes = useStyles();
  const { user, updateUnseenMessageCount} = props;
  const conversation = props.conversation || {};
  
  useEffect(() => {
    // At this point I am in the conversation and I am watching it, so mark all messages sent to me by the other user to True.
    const unseenMessages = conversation.messages ? conversation.messages.filter((message) => !message.seen) : undefined;
    if(unseenMessages && unseenMessages.length > 0){
      updateUnseenMessageCount(conversation.id, conversation.otherUser ? conversation.otherUser.id : '')
    }
  });

  return (
    <Box className={classes.root}>
      {conversation.otherUser && (
        <>
          <Header
            username={conversation.otherUser.username}
            online={conversation.otherUser.online || false}
          />
          <Box className={classes.chatContainer}>
            <Messages
              messages={conversation.messages}
              otherUser={conversation.otherUser}
              userId={user.id}
            />
            <Input
              otherUser={conversation.otherUser}
              conversationId={conversation.id}
              user={user}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    conversation:
      state.conversations &&
      state.conversations.find(
        (conversation) => conversation.otherUser.username === state.activeConversation
      ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUnseenMessageCount: (conversationId, otherUserId) => {
      dispatch(updateUnseenMessageCount(conversationId, otherUserId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveChat);
