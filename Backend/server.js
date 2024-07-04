import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import connectDatabase from "./db/connenction.js";
import messageRoutes from "./routes/messageRoutes.js";
import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/userRoutes.js";
import searchroute from "./routes/searchroute.js"
import { app, server } from "./soket/socket.js";
import express from "express";
// const app = express();
const port = process.env.PORT || 3000;
// Load environment variables from a .env file into process.env
dotenv.config();

 
app.use(express.json());
app.use(cookieParser());



//
app.use("/api/auth/",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get('/api/conversations',searchroute);  
   
// Connect to database
connectDatabase();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error caught by error handling middleware:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});