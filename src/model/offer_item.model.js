const mongoose = require("mongoose");

const offeritemSchema = new mongoose.Schema(
    {
        Offer: {
            type: mongoose.Types.ObjectId,
            ref: "Offer",
        },
        Item: {
            type: mongoose.Types.ObjectId,
            ref: "Item",
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