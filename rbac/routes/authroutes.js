const express = require("express");
const { register, login } = require("../controller/authcontroller");  // FIX: login was not imported
const usermodels = require("../models/usermodels");
const verifytoken = require("../middlewares/authmiddleware");

const router = express.Router();   // FIX: was "Router()" — must be "express.Router()"

router.post("/register", register);
router.post("/login", login);      // FIX: was "/ login" — space in path is invalid

module.exports = router;
