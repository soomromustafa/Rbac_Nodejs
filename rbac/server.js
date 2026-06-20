const express = require("express");
const dotenv = require("dotenv");
const dbconnection = require("./config/dbconnection");
const authroutes = require("./routes/authroutes");
const approutes = require("./routes/approutes");

dotenv.config();

const app = express();
app.use(express.json());

dbconnection();

app.use("/api/auth", authroutes);
app.use("/api", approutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
