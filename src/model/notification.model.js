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
        User: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
