 const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const usermodels = require("../models/usermodels");

const register = async (req, res) => {

    try {
        const { username, password, role } = req.body;
        const hashed_password = await bcrypt.hash(password, 10);

        const newUser = new usermodels({ username, password: hashed_password, role });
        await newUser.save();
        return res.status(201).json({ message: `user registered with username ${username}` });
    } catch (error) {
        return res.status(500).json({ message: "something went wrong " });
    }

};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const User = await usermodels.findOne({ username });

        if (!User) {
            return res.status(404).json({ message: `user with ${username} not found ` });
        }
        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) {
            return res.status(400).json({ message: "user does not match" });
        }

        const token = jwt.sign(
            { id: User._id, role: User.role },
            "mysecretkey",          // ← changed here
            { expiresIn: "1h" }
        );
        return res.status(200).json(token);

    } catch (error) {
        return res.status(500).json({ message: "something went wrong " });
    }

};


module.exports = {
    register, login
};