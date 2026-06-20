const mongoose = require("mongoose");

const dbconnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.CONNECTION_STRING);

        console.log(
            `Database connected successfully: ${connection.connection.host}, ${connection.connection.name}`
        );

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = dbconnection;
