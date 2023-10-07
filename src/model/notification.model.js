const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            trim: true,
        },
        notification_type: {
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

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
