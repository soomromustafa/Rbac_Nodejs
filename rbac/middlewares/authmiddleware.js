 const jwt = require("jsonwebtoken");

const verifytoken = (req, res, next) => {
    let token;
    const authheader = req.headers.authorization || req.headers.Authorization;

    console.log("=== AUTH DEBUG ===");
    console.log("authheader:", authheader);

    if (authheader && authheader.startsWith("Bearer ")) {
        token = authheader.split(" ")[1];
    }

    console.log("token extracted:", token);

    if (!token) {
        return res.status(400).json({ message: "no token , authorization denied" });
    }
    try {
        const decode = jwt.verify(token, "mysecretkey");
        req.user = decode;
        console.log("decoded:", req.user);
        next();
    } catch (error) {
        console.log("JWT ERROR:", error.message);
        return res.status(400).json({ message: error.message });  // ← shows exact error now
    }
};

module.exports = verifytoken;