const { User } = require("../model");

/**
 * Create User
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createUser = async (reqBody) => {
    return User.create(reqBody)
};
const userList = async (email) => {
    return User.findOne(email);
};

const findUserByEmail = async (_id, token) => {
    return await User.findByIdAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};

const getAllUser = async (role) => {
    return await User.find(role);
};

module.exports = {
    createUser,
    userList,
    findUserByEmail,
    getAllUser,
};