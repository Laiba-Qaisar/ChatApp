import React, { createContext, useContext, useState } from "react";

const ConversationContext = createContext();

// Custom hook to use conversation context
export const useConversation = () => useContext(ConversationContext);

// Provider component to wrap your application and provide state
export const ConversationProvider = ({ children }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);

  return (
    <ConversationContext.Provider
      value={{
        selectedConversation,
        setSelectedConversation,
        messages,
        setMessages,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
