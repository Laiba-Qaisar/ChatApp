//  import { useEffect } from "react";
// import useConversation from "../../zustand/useConversation";
// import Messages from "./message";
// import { TiMessages, TiVideo, TiPhone } from "react-icons/ti";
// import { useAuthContext } from "../../context/AuthContext";
// import { TextInput } from "./TextInput";
// import Avatar from '@mui/material/Avatar';

// const MessageBox = () => {
//   const { selectedConversation, setSelectedConversation } = useConversation();

//   useEffect(() => {
//     return () => setSelectedConversation(null);
//   }, [setSelectedConversation]);

//   return (
//     <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
//       {!selectedConversation ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           {/* Header */}
//           <div style={{ backgroundColor: "#fff", padding: "10px", display: "flex", alignItems: "center" }}>
//             <Avatar src={selectedConversation.profilePic} alt={selectedConversation.fullName} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
//             <span style={{ fontSize: "2rem", fontWeight: "bold", flex: 1 }}>{selectedConversation.fullName}</span>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <TiPhone style={{ marginRight: "10px", cursor: "pointer",fontSize: "2rem" }} />
//               <TiVideo style={{ cursor: "pointer" ,fontSize: "2rem" }} />
//             </div>
//           </div>
//           {/* Messages */}
//           <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
//             <Messages />
//           </div>
//           {/* Input */}
//           <div style={{ backgroundColor: "#fff", padding: "10px", borderTop: "1px solid #ccc" }}>
//             <TextInput />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// const NoChatSelected = () => {
//   const { authUser } = useAuthContext();
//   return (
//     <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
//       <div style={{ textAlign: "center" }}>
//         <p>Welcome 👋 {authUser.fullName} ❄</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages style={{ fontSize: "64px", marginBottom: "20px" }} />
//       </div>
//     </div>
//   );
// };

// export default MessageBox;
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Messages from "./message";
import { TiMessages, TiVideo, TiPhone } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { TextInput } from "./TextInput";
import ChatHeader from "./chatHeader";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    //height: "100vh", // Ensure full viewport height
    height: '100%',
    backgroundColor: "#f0f0f0", // Background color for the entire MessageBox
  //s  overflow: "hidden", // Hide overflow to prevent scrolling on this container
  },
  // header: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   backgroundColor: "#fff",
  //   padding: theme.spacing(2),
  //   borderBottom: "1px solid #ccc",
  //   position: "sticky",
  // },
  conversation: {
    flex: 1,
   // overflowY: "auto",
    padding: theme.spacing(2),
    backgroundColor: "#fff", // Background color for the conversation area
    marginBottom: theme.spacing(2), // Add margin at the bottom to separate from TextInput
  },
  inputContainer: {
    backgroundColor: "#fff",
    // padding: theme.spacing(2),
    borderTop: "1px solid #ccc",
    position: "sticky",
    bottom: 0,
    zIndex: 1000,
  },
}));

const MessageBox = () => {
  const classes = useStyles();
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  useEffect(() => {
    console.log('--> re-render at MessageBox')
  });

  return (
    <div className={classes.root}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          {/* ChatHeader */}
          <ChatHeader
            fullName={selectedConversation.fullName}
            profilePic={selectedConversation.profilePic}
          />
          {/* <div className={classes.header}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={selectedConversation.profilePic} alt={selectedConversation.fullName} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
              <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{selectedConversation.fullName}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiPhone style={{ marginRight: "10px", cursor: "pointer" }} />
              <TiVideo style={{ cursor: "pointer" }} />
            </div>
          </div> */}
          {/* Messages */}
          <div className={classes.conversation}>
            <Messages />
          </div>
          {/* Input */}
          <div className={classes.inputContainer}>
            <TextInput />
          </div>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages style={{ fontSize: "64px", marginBottom: "20px" }} />
      </div>
    </div>
  );
};

export default MessageBox;
