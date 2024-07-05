import React from "react";
import {  Navigate, Routes, Route   } from "react-router-dom";
import Home from "../src/Pages/Home";
import Signup from "../src/Pages/Signup";
import Login from "./Pages/Login";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
 

function App() {
  const { authUser } = useAuthContext();
  return (
 <>
 
 <Routes>
 <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
   
      </Routes>
  <Toaster/>
   
 </>
 
  );
}

export default App;
