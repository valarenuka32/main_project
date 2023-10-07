const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_data: {
            type: Date,
            default: Date.now(),
        },
        total_price: {
            type: Number,
            default: 0,
        },
        status: {
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

const order = mongoose.model("order", orderSchema);
module.exports = order;
