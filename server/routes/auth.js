const express = require("express");
const {
  authSignUp,
  authSignIn,
  getUserData,
  getALLUserData,
} = require("../controller/authUser");
const {
  middlewareSignUp,
  middlewareSignIn,
  verify,
} = require("../middleware/auth");

const router = express.Router();

router.post("/signup", middlewareSignUp, authSignUp);

router.post("/signin", middlewareSignIn, authSignIn);

router.get("/me", verify, getUserData);

router.get("/getallusers", verify, getALLUserData);

module.exports = router;
