import express from "express";
import Project from "../models/Project.js";
import { protect } from "../middleware/authMiddleware.js";

import upload from "../middleware/upload.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// CREATE project
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const uploaded = await uploadToCloudinary(req.file.buffer);
      imageUrl = uploaded.secure_url;
    }

    const project = await Project.create({
      ...req.body,
      images: imageUrl ? [imageUrl] : [],
    });

    res.json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE project
router.delete("/:id", protect, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});


router.put("/:id", protect, async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});

export default router;