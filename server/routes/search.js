import express from "express";
import { searchConversation } from "../controller/search.js";

const router = express.Router();

router.get("/search", searchConversation);

export default router;
