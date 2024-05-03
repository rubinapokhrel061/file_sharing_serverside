import multer from "multer";

const upload = multer({ dest: "uploads" });
export default upload;

// const upload = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads"); //cb(error,success)
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// export default upload;
