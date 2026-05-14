import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// SEND message
router.post("/", async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.json({ success: true });
});

// GET messages (admin)
router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ _id: -1 });
  res.json(messages);
});

export default router;