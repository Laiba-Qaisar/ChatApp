import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDatabase from "./db/connenction.js";
import messageRoutes from "./routes/message.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import searchroute from "./routes/search.js";
import { app, server } from "./soket/socket.js";
import express from "express";

const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal server error" });
});

//
app.use("/api/auth/", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get("/api/conversations", searchroute);

// Connect to database
connectDatabase();

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
