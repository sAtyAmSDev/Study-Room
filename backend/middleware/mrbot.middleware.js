import multer from "multer";

export const MrBotmiddle = (req, res, next) => {

  next();
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./TempImg");
  },
  filename: function (req, file, cb) {
    console.log(file);

    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage: storage });