const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        token: {
            type: String,
        },
        expire_time: {
            type: Date,
            default: null,
        },
        User: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;