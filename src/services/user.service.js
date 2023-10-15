const User = require("../models");

const createUser = async (reqBody) => {
    return User.create(reqBody)
};

const userList = async (req, res) => {
    return User.find()
};

const getUserById = async (userId) => {
    return User.findById(userId);
};

const updateRecode = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody });
};

const deleteRecode = async (userId) => {
    return User.findByIdAndDelete(userId);
};
module.exports = {
    createUser,
    userList,
    getUserById,
    updateRecode,
    deleteRecode
};