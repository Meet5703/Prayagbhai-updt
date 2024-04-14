import mongoose from "mongoose";
import { Content } from "next/font/google";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  coverImg: {
    type: String
  },
  heading1: {
    type: String
  },
  heading2: {
    type: String
  },
  heading3: {
    type: String
  },
  heading4: {
    type: String
  },
  heading5: {
    type: String
  },
  description1: {
    type: String
  },
  description2: {
    type: String
  },
  description3: {
    type: String
  },
  description4: {
    type: String
  },
  description5: {
    type: String
  }
});

const BlogSchema = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default BlogSchema;
