const { user } = require("../model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<user>}
 */

const createUser = async (reqBody) => {
    return user.create(reqBody)
};
const userList = async (req, res) => {
    return user.find()
};

const getUserById = async (userId) => {
    return user.findById(userId)
};

const updateRecode = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
};

const deleteRecode = async (userId) => {
    return user.findByIdAndDelete(userId);
};

module.exports = {
    createUser,
    userList,
    getUserById,
    updateRecode,
    deleteRecode
}