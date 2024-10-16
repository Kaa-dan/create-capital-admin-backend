import express from "express";
import multer from "multer";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
} from "../controller/blog.controller.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();
// API Routes
router.post("/blogs", upload.single("image"), createBlog);

router.get("/blogs", getBlogs);

router.get("/blogs/:id", getSingleBlog);

router.put("/blogs/:id", updateBlog);

router.delete("/blogs/:id", deleteBlog);

export default router;
