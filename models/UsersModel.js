const mongoose = require("mongoose");
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
   
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    
    isVerified: {
      type: Boolean,
      default: true,
    },

    deviceToken:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

// virtual fields


module.exports = mongoose.model("Users", userSchema);
