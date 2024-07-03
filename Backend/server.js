
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import connectDatabase from "./db/connenction.js";
import messageRoutes from "./routes/messageRoutes.js";
import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/userRoutes.js";
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
app.get('/api/conversations/search', async (req, res) => {
  const query = req.query.query.toLowerCase();
  try {
    const conversations = await Conversation.find({
      fullName: { $regex: query, $options: 'i' },
    });
    res.json(conversations);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).send('Server error');
  }
});
server.listen(port, () => {
  connectDatabase();
  console.log(`Server is running on http://localhost:${port}`);
});
