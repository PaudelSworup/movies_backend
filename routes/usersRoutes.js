const express = require("express");
const {
  registerAccount,
  activateAccount,
  Login,
} = require("../controllers/userController/UserController");
const { usersValidations, validators } = require("../utils/Validators");

const router = express.Router();

router.post("/register", usersValidations, validators, registerAccount);
router.post("/activation/:token", activateAccount);
router.post("/login", Login);

module.exports = router;
