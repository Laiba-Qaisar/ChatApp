// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

// const MessageFormat = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();
//   const fromMe = message.senderId === authUser._id;
//   const formattedTime = extractTime(message.createdAt);
//   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700";
//   const chatClassName = fromMe ? "flex-row-reverse" : "flex-row";
//   const shakeClass = message.shouldShake ? "shake" : "";

//   return (
//     <div className={`flex items-start mb-2 ${chatClassName}`}>
//       {!fromMe && (
//         <div className='w-10 rounded-full mr-2'>
//           <img className='rounded-full' alt='Profile' src={profilePic} />
//         </div>
//       )}
//       <div className={`p-2 rounded-lg max-w-md break-words ${bubbleBgColor} text-white ${shakeClass}`}>
//         {message.message}
//         <div className='text-xs text-gray-300'>{formattedTime}</div>
//       </div>
//     </div>
//   );
// };

// export default MessageFormat;
import { Avatar , Typography } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { makeStyles  } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  messageContainer: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
  },
  messageBubble: {
    maxWidth: "calc(100% - 8px)", // Adjust based on your layout needs
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.grey[300], // Default background color
  },
  senderBubble: {
    // backgroundColor: theme.palette.primary.main, // Blue background for sender
    backgroundColor: '#c2e2f0',
    color: theme.palette.common.black, // White text for sender
    alignSelf: "flex-end",
  },
  messageTime: {
    fontSize: "12px", // Reduced font size for time
    color: theme.palette.grey[500], // Grey color for time
    marginTop: theme.spacing(1),
  },
}));

const MessageFormat = ({ message }) => {
  const classes = useStyles();
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  return (
    <div className={classes.messageContainer} style={{ justifyContent: fromMe ? 'flex-end' : 'flex-start' }}>
      <Avatar alt="Profile" src={profilePic} />
      <div className={`${classes.messageBubble} ${fromMe ? classes.senderBubble : ""}`}>
        <Typography>{message.message}</Typography>
        <Typography variant="body2" className={classes.messageTime}>
          {formattedTime}
        </Typography>
      </div>
    </div>
  );
};

export default MessageFormat;


