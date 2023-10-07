const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
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

const Notification = mongoose.model("Notification", NotificationSchema);
module.exports = Notification;
