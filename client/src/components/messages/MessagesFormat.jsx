import { Avatar, Typography } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import { useConversation } from "../../context/UseConversation";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  messageContainer: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
  },
  messageBubble: {
    maxWidth: "calc(100% - 8px)",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.grey[300],
  },
  senderBubble: {
    backgroundColor: "#c2e2f0",
    color: theme.palette.common.black,
    alignSelf: "flex-end",
  },
  messageTime: {
    fontSize: "12px",
    color: theme.palette.grey[500],
    marginTop: theme.spacing(1),
  },
}));

const MessageFormat = ({ message }) => {
  const classes = useStyles();
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  return (
    <div
      className={classes.messageContainer}
      style={{ justifyContent: fromMe ? "flex-end" : "flex-start" }}
    >
      <Avatar alt="Profile" src={profilePic} />
      <div
        className={`${classes.messageBubble} ${
          fromMe ? classes.senderBubble : ""
        }`}
      >
        <Typography>{message.message}</Typography>
        <Typography variant="body2" className={classes.messageTime}>
          {formattedTime}
        </Typography>
      </div>
    </div>
  );
};

export default MessageFormat;
