import React from 'react'
import ReactDOM from 'react-dom/client'
import {   BrowserRouter,   } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from "./context/AuthContext";
import { SocketContextProvider } from "./context/SocketContext";
import { ConversationProvider } from './context/useConversation.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>  
      <AuthContextProvider>
        <ConversationProvider>
        <SocketContextProvider>
        <App />
        </SocketContextProvider>
        </ConversationProvider>
      </AuthContextProvider>
  
  </BrowserRouter>


  </React.StrictMode>,
)
