const express = require("express");
const {
  registerAccount,
  activateAccount,
  Login,
} = require("../controllers/userController/UserController");
const {
  uploadProfile,
  getProfileByID,
} = require("../controllers/profileController");
const { usersValidations, validators } = require("../utils/Validators");

const profile = require("../middleware/middleware");

const router = express.Router();

router.post("/register", usersValidations, validators, registerAccount);
router.post("/activation/:token", activateAccount);
router.post("/login", Login);
router.post("/profile/:userid", profile.single("image"), uploadProfile);
router.get("/profile/:id", getProfileByID);

module.exports = router;
