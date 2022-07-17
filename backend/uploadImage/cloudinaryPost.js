import cloudinary from "cloudinary";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAdmin, isAuth, isSeller } from "../utils.js";

const cloudinaryPostRouter = express.Router();

// config

cloudinary.config({
  cloud_api_key: process.env.CLOUDINARY_API_KEY,
  cloud_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_API_NAME,
});

// req.files.file.path
// req.body.image
cloudinaryPostRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const result = await cloudinary.uploader.upload(req.body.image, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    });
    res.json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  })
);

export default cloudinaryPostRouter;
