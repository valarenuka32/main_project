const { User } = require("../model");

/**
 * Create User
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createUser = async (reqBody) => {
    return User.create(reqBody)
};
const userList = async (req, res) => {
    return User.find()
};

const getuserById = async (userId) => {
    return User.findById(userId)
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
    getuserById,
    updateRecode,
    deleteRecode
}