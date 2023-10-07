const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            trim: true,
        },
        restaurant:{
            type:mongoose.Types.ObjectId,
            ref:"restaurant"
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
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

const review = mongoose.model("review", reviewSchema);
module.exports = review;