const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        s_name: {
            type: String,
            trim: true
        },
        s_class: {
            type: Number,
            default: 0,
        },
        s_gread: {
            type: String,
            trim: true
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