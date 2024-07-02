import React from 'react'
import Chat from './Chat';

import useGetConversations from '../hooks/useGetConversations'
import { CircularProgress } from '@mui/material'
function Conversations() {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations:",conversations)
  return (
    <div>   
       {conversations.map((Chat, idx) => (
      <Chat
        key={Chat._id}
        Chat={Chat}
      
        lastIdx={idx === conversations.length - 1}
      />
    ))}
    {loading ? <CircularProgress/> : null}
    
    </div>
   

  )
}

export default Conversations
