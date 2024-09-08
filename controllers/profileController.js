const Profile = require("../models/profileModel");
const fs = require("fs");

exports.uploadProfile = async (req, res) => {
  let profile = await Profile.findOne({ userId: req.params.userid });

  if (!profile) {
    profile = new Profile({
      profileImage: req.file.path,
      userId: req.params.userid,
    });
    profile = await profile.save();
  }

  if (profile.profileImage) {
    fs.unlink(profile.profileImage, (err) => {
      if (err) {
        console.error("Error deleting image:", err);
      } else {
        console.log("Image deleted successfully");
      }
    });
  }

  profile.profileImage = req.file.path;
  profile = await profile.save();

  return res.status(200).json({ success: true, message: "profile Updated" });
};

exports.getProfileByID = async (req, res) => {
  let profile = await Profile.findOne({ userId: req.params.id }).populate(
    "userId"
  );

  if (!profile) {
    return res.status(400).json({
      success: false,
      error: "Something went Wrong",
    });
  }

  return res.status(200).send({
    success: true,
    profile,
  });
};
