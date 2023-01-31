const express = require("express");
const router = express.Router();


const users = require("../controllers/randomUserController");




router.get("/", users.findAllUsers);
router.get("/:id", users.findUserById);




module.exports = router;