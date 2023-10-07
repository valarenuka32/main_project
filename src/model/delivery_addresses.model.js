const mongoose = require("mongoose");

const DeliveryAddressesSchema = new mongoose.Schema(
    {
        street_address: {
            type: String,
            trim: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        city: {
            type: mongoose.Types.ObjectId,
            ref: "city"
        },
        state: {
            type: mongoose.Types.ObjectId,
            ref: "state"
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

const DeliveryAddresses = mongoose.model("DeliveryAddresses", DeliveryAddressesSchema);
module.exports = DeliveryAddresses;