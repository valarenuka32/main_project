const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        items: {
            type: String,
            default: 0
        },
        total_items: {
            type: Number,
            default: 0,
        },
        total_price: {
            type: Number,
            default: 0,
        },
        coupon_code: {
            type: String,
            trim: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;