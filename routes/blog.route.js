import express from "express";
import multer from "multer";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
} from "../controller/blog.controller.js";
import authorization from "../middleware/authorization.js";

import { upload } from "../middleware/multer.js";

const router = express.Router();
// API Routes
router.post("/blogs", authorization, upload.single("image"), createBlog);

router.get("/blogs", authorization, getBlogs);

router.get("/blogs/:id", authorization, getSingleBlog);

router.put("/blogs/:id", authorization, upload.single("image"), updateBlog);

router.delete("/blogs/:id", authorization, deleteBlog);

export default router;
