const express = require("express");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const uploadFileMix = upload.fields([{name: "photo", maxCount: 2}, {name: "gallery", maxCount: 5}]);



const fileUploadController = async (req, res) => {
    const filePath = req.files;
    //console.log(req.files["photo"]);
    //console.log(req.files["gallery"]);

    try {
        const result1 = [];

        for (let i = 0; i < filePath.photo.length; i++) {
        result1.push(await cloudinary.uploader.upload(filePath.photo[i].path, { response_type: "auto" }));
        fs.unlinkSync(filePath.photo[i].path)
        }

        const result2 = [];

        for (let i = 0; i < filePath.gallery.length; i++) {
        result2.push(await cloudinary.uploader.upload(filePath.gallery[i].path, { response_type: "auto" }));
        fs.unlinkSync(filePath.gallery[i].path);
        }
    
        res.json({
            message: "file uploaded!",
            response1: result1.map(file => file.url),
            response2: result2.map(file=> file.url)
        })
    

    } catch (error) {
        res.json({message: "An Error Occurred!", error: error});
    }
    

}

module.exports = {fileUploadController, uploadFileMix};