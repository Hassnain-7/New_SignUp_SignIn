const jwt = require("jsonwebtoken");

const middlewareSignUp = (req, res, next) => {
  if (!req.body.fullname) {
    res.status(404).json({ message: "Fullname must be required" });
  }
  if (!req.body.email) {
    res.status(404).json({ message: "Email must be required" });
  }
  if (!req.body.password) {
    res.status(404).json({ message: "Password must be required" });
  }
  next();
};

const middlewareSignIn = (req, res, next) => {
  if (!req.body.email) {
    res.status(404).json({ message: "Email must be required" });
  }
  if (!req.body.password) {
    res.status(404).json({ message: "Email must be required" });
  }
  next();
};

const verify = async (req, res, next) => {
  const token = req.headers.token;
  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.status(404).json({ message: "Not Auth" });
  }
};

module.exports = { middlewareSignUp, middlewareSignIn, verify };
