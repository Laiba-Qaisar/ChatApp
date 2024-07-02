
import express from"express"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import connectDatabase from "./db/connenction.js";
import messageRoutes from "./routes/messageRoutes.js";
import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();
const port = process.env.PORT || 3000;
// Load environment variables from a .env file into process.env
dotenv.config();

 
app.use(express.json());
app.use(cookieParser());



//
app.use("/api/auth/",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.listen(port, () => {
  connectDatabase();
  console.log(`Server is running on http://localhost:${port}`);
});
