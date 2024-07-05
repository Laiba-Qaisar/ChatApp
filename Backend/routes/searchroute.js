import express from "express";
 import { searchConversation } from "../controller/searchConversation";

const router = express.Router();

router.get("/search",searchConversation);

 

export default router;