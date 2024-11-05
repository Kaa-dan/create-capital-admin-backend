import express from "express";
import { login } from "../controller/login.controller.js";
const router = express.Router();
router.post("/", login);

export default router;
