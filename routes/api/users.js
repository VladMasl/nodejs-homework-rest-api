const express = require("express");
const auth = require("../../middlewares/auth");
const upload = require("../../servisce/upload");
const {
  usersPostSchema,
  usersSubscSchema,
  usersVerifySchema,
} = require("../../validate");

const {
  signup,
  login,
  logout,
  current,
  subscription,
  avatars,
  verify,
  sendVerifyCodeAgain,
} = require("../../controller");

const router = express.Router();

router.post("/signup", usersPostSchema, signup);
router.post("/login", usersPostSchema, login);
router.post("/verify", usersVerifySchema, sendVerifyCodeAgain);
router.get("/logout", auth, logout);
router.get("/verify/:verificationToken", verify);
router.get("/current", auth, current);
router.patch("/", auth, usersSubscSchema, subscription);
router.patch("/avatars", auth, upload.single("avatars"), avatars);

module.exports = router;
