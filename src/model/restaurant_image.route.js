const mongoose = require("mongoose");

const restaurantimgSchema = new mongoose.Schema(
    {
        restaurant_image: {
            type: String,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const Restaurantimage = mongoose.model("Restaurantimage", restaurantimgSchema);
module.exports = Restaurantimage;