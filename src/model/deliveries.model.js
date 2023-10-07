const mongoose = require("mongoose");

const deliveriesSchema = new mongoose.Schema(
    {
        status: {
            type: String,
            trim: true,
        },
        delivery_date: {
            type: Date,
            default: Date.now(),
        },
        order: {
            type: mongoose.Types.ObjectId,
            ref: "order"
        },
        Deliverydrivers: {
            type: mongoose.Types.ObjectId,
            ref: "Deliverydrivers"
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Deliveries = mongoose.model("Deliveries", deliveriesSchema);
module.exports = Deliveries;