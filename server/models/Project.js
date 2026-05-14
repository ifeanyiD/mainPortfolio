import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  category: String,
  techStack: [String],
  github: String,
  liveDemo: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Project", projectSchema);