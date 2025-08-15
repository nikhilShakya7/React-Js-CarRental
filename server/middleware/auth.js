const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const auth = req.header("Authorization"); 
  if (!auth) return res.status(401).json({ message: "No token provided" });

  const [, token] = auth.split(" ");
  if (!token) return res.status(401).json({ message: "Invalid auth header" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (e) {
    return res.status(401).json({ message: "Token invalid/expired" });
  }
};
