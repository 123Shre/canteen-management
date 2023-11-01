import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Frontend/");
  },
  filename: function (req, file, cb) {
    cb(null, "Image/"+file.originalname);
  },
});

export const upload = multer({ storage });
