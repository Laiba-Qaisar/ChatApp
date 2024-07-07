import { useEffect } from "react";
import { useConversation } from "../../context/UseConversation";
import Message from "./Message";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { TextInput } from "./TextInput";
import ChatHeader from "./ChatHeader";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#f0f0f0",
  },

  conversation: {
    flex: 1,
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    marginBottom: theme.spacing(2),
  },
  inputContainer: {
    backgroundColor: "#fff",
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

  return (
    <div className={classes.root}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ChatHeader
            fullName={selectedConversation.fullName}
            profilePic={selectedConversation.profilePic}
          />

          <div className={classes.conversation}>
            <Message />
          </div>

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
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages style={{ fontSize: "64px", marginBottom: "20px" }} />
      </div>
    </div>
  );
};

export default MessageBox;
