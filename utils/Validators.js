const { check, validationResult } = require("express-validator");
const Users = require("../models/UsersModel");

exports.usersValidations = [
  check("email", "Please enter your email")
    .notEmpty()
    .isEmail()
    .withMessage("Invalid email format")
    .custom((val) => {
      return Users.findOne({ email: val.toLowerCase() }).then((user) => {
        if (user) {
          return Promise.reject("Email already exist");
        }
      });
    }),

  check("username", "Please enter your username")
    .notEmpty()
    .custom((val) => {
      return Users.findOne({ username: val }).then((user) => {
        if (user) {
          return Promise.reject("username is taken");
        }
      });
    }),
  check("password", "password is required")
    .notEmpty()
    .matches(/[a-z]/)
    .withMessage("password must contain one lowercase alphabet")
    .matches(/[A-Z]/)
    .withMessage("password must contain one uppercase alphabet")
    .matches(/[0-9]/)
    .withMessage("password must contain one numeric value")
    .matches(/[@$#-_/*&]/)
    .withMessage("password must contain one special character")
    .isLength({ min: 8 })
    .withMessage("password must be atleast 8 character")
    .isLength({ max: 50 })
    .withMessage("password can't be more than 50 character"),
];

exports.validators = (req, res, next) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    next();
  } else {
    return res.status(400).json({ error: error.array()[0].msg });
  }
};
