import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import blogRoutes from "./routes/blog.route.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected :${conn.connection.host}`);
    console.log("server is running nithin good job");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const app = express();
const port = process.env.PORT || 5000;

// cors enabling
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/blog", blogRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
