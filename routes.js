import express from "express";
import { uploadImage, getImage } from "./image-controller.js";
import upload from "./middleware/upload.js";
const router = express.Router();

router.post("/uploadfile", upload.single("file"), uploadImage);
router.get("/uploadfile/:fileId", getImage);

export default router;
