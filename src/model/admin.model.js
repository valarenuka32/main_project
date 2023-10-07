const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        phone_no: {
            type: Number,
        },
        position: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;