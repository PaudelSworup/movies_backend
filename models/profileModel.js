const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  profileImage: {
    type: String,
    required: true,
    trim: true,
  },

  userId: {
    type: ObjectId,
    required: true,
    ref: "Users",
  },
});

module.exports = mongoose.model("Profile", profileSchema);
