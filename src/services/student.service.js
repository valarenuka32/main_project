const { student } = require("../models");

// student

const studentCreate = async (reqBody) => {
    return student.create(reqBody)
};

const studentList = async (req, res) => {
    return student.find()
    .populate("admin")
    .populate("feculty")
};

const updateDetailes = async (studentId, updatebody) => {
    return student.findByIdAndUpdate(studentId, { $set: updatebody });
};

const deleteDetails = async (studentId) => {
    return student.findByIdAndDelete(studentId)
};

const getStudentById = async (studentId) => {
    return student.findById(studentId)
};
module.exports = {
    studentCreate,
    studentList,
    updateDetailes,
    deleteDetails,
    getStudentById
};