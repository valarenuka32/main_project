const { admin } = require("../models");

// admin

const adminCreate = async (reqBody) => {
    return admin.create(reqBody)
};

const adminList = async (req, res) => {
    return admin.find()
};

const updateDetailes = async (adminId, updatebody) => {
    return admin.findByIdAndUpdate(adminId, { $set: updatebody });
};

const deleteDetails = async (adminId) => {
    return admin.findByIdAndDelete(adminId)
};

const getadminById = async (adminId) => {
    return admin.findById(adminId)
};
module.exports = {
    adminCreate,
    adminList,
    updateDetailes,
    deleteDetails,
    getadminById
};