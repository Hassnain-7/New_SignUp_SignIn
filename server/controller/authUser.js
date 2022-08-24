const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authSignUp = async (req, res) => {
  try {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);

    const userCreated = await UserModel.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashPassword,
    });

    res.status(200).json({ message: "User Sucessfully Created", userCreated });
  } catch (error) {
    res.status(200).json({ message: "User do not created", error });
  }
};

const authSignIn = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) {
    res.status(400).json({ message: "user not found" });
  }

  const isValidPassword = bcrypt.compareSync(req.body.password, user.password);

  if (!isValidPassword) {
    res.status(400).json({ message: "Password does not match" });
  }

  const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  res.status(200).json({ message: "User sucessfully login", token });
};

const getUserData = async (req, res) => {
  const userData = await UserModel.findOne({ email: req.user.email });
  res.status(200).json(userData);
};

const getALLUserData = async (req, res) => {
  try {
    const allUser = await UserModel.find();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = { authSignUp, authSignIn, getUserData, getALLUserData };
