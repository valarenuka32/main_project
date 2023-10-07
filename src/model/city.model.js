const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
    {
        city_name: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const City = mongoose.model("City", citySchema);
module.exports = City;