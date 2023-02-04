const express = require("express");
const router = express.Router();
const {run} = require("../connectionToDb/dbConnect");

const users = require("../controllers/randomUserController");




router.get("/", users.findAllUsers);
router.get("/:id", users.findUserById);




module.exports = router;