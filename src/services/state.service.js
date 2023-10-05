const { state } = require("../model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createState = async (reqbody) => {
    return state.crate(reqbody);
};

const stateList = (req, res) => {
    return state.find();
};

const deleteRecode = async (stateId) => {
    return state.findByIdAndDelete(stateId);
};

const updateRecode = async (stateId, updateBody) => {
    return state.findByIdAndUpdate(stateId, { $set: updateBody });
};

const getStateById = async (stateId) => {
    return state.findById(stateId);
};
module.exports = {
    createState,
    stateList,
    deleteRecode,
    updateRecode,
    getStateById
};