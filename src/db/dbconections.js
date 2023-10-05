const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url, config.mongodb.options)
        .then((data) => {
            console.log("Database connection successfully!");
        })
        .catch((data) => {
            console.log("Database connetion error:", error);
        })
};

module.exports = { connectDB };