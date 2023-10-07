const mongoose = require("mongoose");

const offeritemSchema = new mongoose.Schema(
    {
        offer: {
            type: mongoose.Types.ObjectId,
            ref: "offer",
        },
        item: {
            type: mongoose.Types.ObjectId,
            ref: "item",
        },
        discounted_price: {
            type: Number,
            default: 0,
        },
        free_item_quantity: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const offeritem = mongoose.model("offeritem", offeritemSchema);
module.exports = offeritem;