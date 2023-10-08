const multer = require("multer");
const fs = require("fs");
const path = require("path");

// image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "image") {
            fs.mkdirSync(path.join(__dirname, "../public/image"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/image"));
        }
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
            cb("only .png,.jpg,.jpeg format are allowed!");
        }
        cb(null, new Date().getTime() + ext);
    },
});

const upload = multer({
    storage: storage,
});

module.exports = { upload };