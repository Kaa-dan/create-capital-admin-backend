import express, { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
} from "../controller/blog.controller";
const router = express.Router();
// API Routes
router.post("/api/create-blog", createBlog);

router.get("/api/blogs", getBlogs);

router.get("/api/blogs/:id", getSingleBlog);

router.put("/api/blogs/:id", updateBlog);

router.delete("/api/blogs/:id", deleteBlog);
