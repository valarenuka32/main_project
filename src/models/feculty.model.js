const mongoose = require("mongoose");

const fecultySchema = new mongoose.Schema(
    {
        f_name: {
            type: String,
            trim: true
        },
        f_class: {
            type: Number,
            default: 0,
        },
        f_subject: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        phone_number: {
            type: Number,
            default: 0,
        },
        admin: {
            type: mongoose.Types.ObjectId,
            ref: "admin",
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const feculty = mongoose.model("feculty", fecultySchema);
module.exports = feculty;