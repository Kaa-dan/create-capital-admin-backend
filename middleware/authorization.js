import jwt from "jsonwebtoken";

// Middleware to authenticate the JWT token
const authorization = (req, res, next) => {
  const token = req.headers["authorization"];

  // Check if token exists
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  // Remove "Bearer " prefix if it's included in the token
  const tokenWithoutBearer = token.startsWith("Bearer ")
    ? token.slice(7, token.length)
    : token;

  // Verify the token
  jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token" });
    }
    

    // Attach the decoded user info to the request object
    req.user = decoded;

    // Call the next middleware or route handler
    next();
  });
};

export default authorization;
