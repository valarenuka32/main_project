const mongoose = require("mongoose");

const orderitemSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            trim: true,
        },
        subtotal_price: {
            type: Number,
            default: 0,
        },
        order: {
            type: mongoose.Types.ObjectId,
            ref: "order",
        },
        item: {
            type: mongoose.Types.ObjectId,
            ref: "item",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Orderitem = mongoose.model("Orderitem", orderitemSchema);
module.exports = Orderitem;
