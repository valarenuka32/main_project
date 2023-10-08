const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const Image = mongoose.model("Image", imgSchema);
module.exports = Image;