import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";
import { CircularProgress } from "@mui/material";

function Conversations() {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations:", conversations);
  const [loadedConversation, setLoadedConversation] = useState([]);
  useEffect(() => {
    setLoadedConversation(conversations);
  }, [conversations]);
  return (
    <div className="py-2 flex flex-col">
      {loadedConversation.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}

      {loading ? <CircularProgress /> : null}
    </div>
  );
}

export default Conversations;
