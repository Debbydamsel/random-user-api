const express = require("express");
const fileUploadRouter = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const fs = require("fs");
const {fileUploadController, uploadFileMix} = require("../controllers/fileUploadController");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


//upload.single("photo")--> to upload a file
//to upload multiple files


fileUploadRouter.post("/upload", uploadFileMix, fileUploadController)

module.exports = fileUploadRouter;