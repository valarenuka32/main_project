const mongoose = require("mongoose");

const restauranttypeSchema = new mongoose.Schema(
    {
        restaurant_type: {
            type: String,
            trim: true
        },
        Restaurant:{
            type:mongoose.Types.ObjectId,
            ref:"Restaurant",
        },
    },
    {
        timestamps: true,
        versionKay: false,
    }
);
const Restauranttype = mongoose.model("Restauranttype", restauranttypeSchema);
module.exports = Restauranttype;