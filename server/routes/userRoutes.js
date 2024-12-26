const express = require("express");
const {
  createUser,
  loginUser,
  authUser,
  logout,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/auth-user", authUser);
userRouter.post("/create-user", createUser);
userRouter.post("/login-user", loginUser);
userRouter.delete("/logout", logout);

module.exports = userRouter;
