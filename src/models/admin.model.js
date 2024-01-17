const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        feculty: {
            type: mongoose.Types.ObjectId,
            ref: "feculty",
        },
        student: {
            type: mongoose.Types.ObjectId,
            ref: "student",
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

const admin = mongoose.model("admin", adminSchema);
module.exports = admin;