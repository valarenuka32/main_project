const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_data: {
            type: Date,
            default:Date.now(),
        },
        totalamount: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const order = mongoose.model("order", orderSchema);
module.exports = order;
