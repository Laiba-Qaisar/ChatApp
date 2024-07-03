// import React, { useEffect, useRef } from "react";
// import { Avatar, CircularProgress } from "@mui/material";
// import { createStyles, makeStyles } from "@mui/styles";
// import { deepOrange } from "@mui/material/colors";
// import useGetMessages from "../../hooks/useGetMessages";
// import useListenMessages from "../../hooks/useListenMessages";
 

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     messageRow: {
//       display: "flex",
//     },
//     messageRowRight: {
//       display: "flex",
//       justifyContent: "flex-end",
//     },
//     messageBlue: {
//       position: "relative",
//       marginLeft: "20px",
//       marginBottom: "10px",
//       padding: "10px",
//       backgroundColor: "#A8DDFD",
//       width: "60%",
//       textAlign: "left",
//       font: "400 .9em 'Open Sans', sans-serif",
//       border: "1px solid #97C6E3",
//       borderRadius: "10px",
//       "&:after": {
//         content: "''",
//         position: "absolute",
//         width: "0",
//         height: "0",
//         borderTop: "15px solid #A8DDFD",
//         borderLeft: "15px solid transparent",
//         borderRight: "15px solid transparent",
//         top: "0",
//         left: "-15px",
//       },
//       "&:before": {
//         content: "''",
//         position: "absolute",
//         width: "0",
//         height: "0",
//         borderTop: "17px solid #97C6E3",
//         borderLeft: "16px solid transparent",
//         borderRight: "16px solid transparent",
//         top: "-1px",
//         left: "-17px",
//       },
//     },
//     messageOrange: {
//       position: "relative",
//       marginRight: "20px",
//       marginBottom: "10px",
//       padding: "10px",
//       backgroundColor: "#f8e896",
//       width: "60%",
//       textAlign: "left",
//       font: "400 .9em 'Open Sans', sans-serif",
//       border: "1px solid #dfd087",
//       borderRadius: "10px",
//       "&:after": {
//         content: "''",
//         position: "absolute",
//         width: "0",
//         height: "0",
//         borderTop: "15px solid #f8e896",
//         borderLeft: "15px solid transparent",
//         borderRight: "15px solid transparent",
//         top: "0",
//         right: "-15px",
//       },
//       "&:before": {
//         content: "''",
//         position: "absolute",
//         width: "0",
//         height: "0",
//         borderTop: "17px solid #dfd087",
//         borderLeft: "16px solid transparent",
//         borderRight: "16px solid transparent",
//         top: "-1px",
//         right: "-17px",
//       },
//     },
//     messageContent: {
//       padding: 0,
//       margin: 0,
//     },
//     messageTimeStampRight: {
//       position: "absolute",
//       fontSize: ".85em",
//       fontWeight: "300",
//       marginTop: "10px",
//       bottom: "-3px",
//       right: "5px",
//     },
//     orange: {
//       color: theme.palette.getContrastText(deepOrange[500]),
//       backgroundColor: deepOrange[500],
//       width: theme.spacing(4),
//       height: theme.spacing(4),
//     },
//     displayName: {
//       marginLeft: "20px",
//     },
//   })
// );

// const Messages = () => {
//   const classes = useStyles();
//   const { messages, loading } = useGetMessages();
//   useListenMessages();
//   const lastMessageRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }, [messages]);

//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       {!loading &&
//         messages.length > 0 &&
//         messages.map((message, idx) => (
//           <div key={message._id} ref={lastMessageRef}>
//             {message.isSender ? (
//               <MessageRight message={message.content} timestamp={message.timestamp} />
//             ) : (
//               <MessageLeft message={message.content} timestamp={message.timestamp} photoURL={message.photoURL} displayName={message.fullname} />
//             )}
//           </div>
//         ))}

 
//       {!loading && messages.length === 0 && (
//         <p className='text-center'>Send a message to start the conversation</p>
//       )}
//     </div>
//   );
// };

// const MessageLeft = ({ message, timestamp, photoURL, displayName }) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.messageRow}>
//       <Avatar alt={displayName} className={classes.orange} src={photoURL}></Avatar>
//       <div>
//         <div className={classes.displayName}>{displayName}</div>
//         <div className={classes.messageBlue}>
//           <div>
//             <p className={classes.messageContent}>{message}</p>
//           </div>
//           <div className={classes.messageTimeStampRight}>{timestamp}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MessageRight = ({ message, timestamp }) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.messageRowRight}>
//       <div className={classes.messageOrange}>
//         <p className={classes.messageContent}>{message}</p>
//         <div className={classes.messageTimeStampRight}>{timestamp}</div>
//       </div>
//     </div>
//   );
// };

// export default Messages;
import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageFormat from "./messagesFormat";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <MessageFormat message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-500">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;

