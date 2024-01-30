const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        s_name: {
            type: String,
            trim: true
        },
        s_class: {
            type: String,
            default: A,
        },
        s_gread: {
            type: String,
            trim: true
        },
        admin: {
            type: mongoose.Types.ObjectId,
            ref: "admin",
        },
        feculty: {
            type: mongoose.Types.ObjectId,
            ref: "feculty",
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

const student = mongoose.model("student", studentSchema);
module.exports = student;