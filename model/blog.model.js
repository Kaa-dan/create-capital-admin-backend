import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  metaTitle: {
    type: String,
    required: true,
    trim: true,
  },
  metaDescription: {
    type: String,
    required: true,
    trim: true,
  },
  metaKeywords: {
    type: String,
    required: true,
    trim: true,
  },
  blogTitle: {
    type: String,
    required: true,
    trim: true,
  },
  blogDescription: {
    type: String,
    required: true,
    trim: true,
  },
  blogContent: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

blogSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
