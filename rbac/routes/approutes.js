const express = require("express");
const verifytoken = require("../middlewares/authmiddleware");
const authorizedroles = require("../middlewares/rolemiddleware");

const router = express.Router();   // FIX: was "Router()" — must be "express.Router()"

//Only Admin can access
router.get("/Admin", verifytoken, authorizedroles("admin"), (req, res) => {   // FIX: was "app.get" → "router.get"  |  verifytoken is middleware not a call  |  (res,req) → (req,res)
    res.json({ message: "Welcome Admin" });
});


//Only Admin and Manager can access
router.get("/manager", verifytoken, authorizedroles("manager", "admin"), (req, res) => {   // FIX: same as above + verifytoken must be before authorizedroles
    res.json({ message: "Welcome  manager " });
});


// All can access
router.get("/user", verifytoken, authorizedroles("manager", "admin", "user"), (req, res) => {  // FIX: same as above
    res.json({ message: "Welcome  user" });
});

module.exports = router;   // FIX: was "module.exports = router()" — router is not a function, remove ()
