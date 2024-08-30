const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const tokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },

    userId: {
      type: ObjectId,
      ref: "Users",
      required: true,
    },

    expiresIn: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", tokenSchema);
