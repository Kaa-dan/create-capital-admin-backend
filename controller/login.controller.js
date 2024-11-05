import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const login = async (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);

  // Check if the entered credentials match
  if (
    username === "creativecapitaladmin" &&
    password === "creativecapitaladmin"
  ) {
    // Generate JWT token
    const token = jwt.sign({ username }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    }); // 1 hour expiration
    return res.status(200).json({ message: "Login successful", token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};
