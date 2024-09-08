const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fileDestination = "public/profile/";

    // check if directory exist
    if (!fs.existsSync(fileDestination)) {
      fs.mkdirSync(fileDestination, { recursive: true });
      cb(null, fileDestination);
    } else cb(null, fileDestination);
  },
  filename: (req, file, cb) => {
    let filename = path.basename(
      file.originalname,
      path.extname(file.originalname)
    );
    // abc.jpg
    // .jpg
    // final result abc

    let ext = path.extname(file.originalname); //.jpg (extension)
    cb(null, filename + "_" + Date.now() + ext);
  },
});

let imageFilter = (req, file, cb) => {
  if (
    !file.originalname.match(/\.(jpg|jpeg|png|svg|jgif|JPG|JPEG|PNG|SVG|JGIF)$/)
  ) {
    return cb(new Error("you can upload image file only"), false);
  } else cb(null, true);
};

const profile = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 2000000, //2MB
  },
});

module.exports = profile;
