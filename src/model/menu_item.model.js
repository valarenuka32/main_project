const mongoose = require("mongoose");

const menuitemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        category: {
            type: String,
            trim: true,
        },
        availability: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const menuitem = mongoose.model("menuitem", menuitemSchema);
module.exports = menuitem;