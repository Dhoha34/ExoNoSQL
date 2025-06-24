// Import of jsonwebtoken and load from .env
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware to verify the JWT token
function verifyToken(req, res, next) {
  // Get the token from the autorization header
  const token = req.headers.authorization;
    // If no token is provided deny the access
    if (!token) {
      return res.status(401).json({ message: 'Access Denied' });
    }
    try {
      // Verify the token using the secret key from .env and remove the prefix from token
      const decoded = jwt.verify(token.split(' ')[1], process.env.KEY);
      req.user = decoded;
      // Continue to the next middleware or route
      next();
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(401).json({ message: 'Invalid Token' });
    }
}

// Export the middleware function 
module.exports = verifyToken;