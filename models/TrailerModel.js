const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const trailerSchema = new mongoose.Schema(
  {
    movieId: {
      type: String,
    },

    trailerName: {
      type: String,
      required: true,
    },

    userId: {
      type: ObjectId,
      ref: "Users",
      required: true,
    },

    image: {
      type: String,
      required: true,
      default:
        "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg",
    },

    watchedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trailer", trailerSchema);
