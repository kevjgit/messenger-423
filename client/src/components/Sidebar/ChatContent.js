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
    backgroundColor: '#3A8DFF',
    alignSelf: 'flex-end', 
    position: 'absolute',
    borderRadius: theme.shape.borderRadius = 40, 
    paddingTop: theme.spacing = 0,
    paddingBottom: theme.spacing = 0,
    paddingLeft: theme.spacing = 5,
    paddingRight: theme.spacing = 5,
    color: theme.palette.common.white,
    fontSize: theme.typography.fontSize = 10,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing = 20, 
    marginTop: theme.spacing = 15, 
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
