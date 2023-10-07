const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        menuitem: {
            type: mongoose.Types.ObjectId,
            ref: "menuitem",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;