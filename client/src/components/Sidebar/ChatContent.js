import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
    fontWeight: "bold",
  },
  previewTextUnseen:{
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "bold",
    color: 'black'
  },

  unseenMessages: {
    display: 'inline-block',
    backgroundColor: '#3A8DFF',
    borderRadius: '40px', 
    padding: '0 5px',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    alignSelf: 'flex-end', 
    marginRight: '20px', 
    marginTop: '15px', 
    position: 'absolute'
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;
  const messageLen = conversation.messages.filter(message => !message.seen && message.senderId === otherUser.id).length;

  return (
    <Box className={classes.root}>
      <Box style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.unseenMessages}> {messageLen > 0 ? messageLen : ''} </Typography>
        <Typography className={messageLen === 0 ? classes.previewText : classes.previewTextUnseen}>
          {latestMessageText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;
