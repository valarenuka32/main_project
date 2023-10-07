const { Admin } = require("../model");

/**
 * Create Admin
 * @param {object} reqBody
 * @returns {Promise<Admin>}
 */

const createAdmin = async (reqBody) => {
    return Admin.create(reqBody);
};
const adminList = async (req, res) => {
    return Admin.find();
};

const getadminById = async (adminId) => {
    return Admin.findById(adminId);
};

const updateRecode = async (adminId, updateBody) => {
    return Admin.findByIdAndUpdate(adminId, { $set: updateBody });
};

const deleteRecode = async (adminId) => {
    return Admin.findByIdAndDelete(adminId);
};

module.exports = {
    createAdmin,
    adminList,
    getadminById,
    updateRecode,
    deleteRecode
};