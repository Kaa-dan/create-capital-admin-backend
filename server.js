import express from "express";
import cors from "cors";
import mongoose from "mongoose";

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
const port = process.env.PORT || 3000;

// cors enabling
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/blog", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
