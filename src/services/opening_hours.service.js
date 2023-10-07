const { openinghours } = require("../model");

/**
 * Create openinghours
 * @param {object} reqBody
 * @returns {Promise<openinghours>}
 */

const createOpeninghours = async (reqBody) => {
    return openinghours.create(reqBody);
};
const openinghoursList = async (req, res) => {
    return openinghours.find();
};

const getopeninghoursById = async (openinghoursId) => {
    return openinghours.findById(openinghoursId);
};

const updateRecode = async (openinghoursId, updateBody) => {
    return openinghours.findByIdAndUpdate(openinghoursId, { $set: updateBody });
};

const deleteRecode = async (openinghoursId) => {
    return openinghours.findByIdAndDelete(openinghoursId);
};

module.exports = {
    createOpeninghours,
    openinghoursList,
    getopeninghoursById,
    updateRecode,
    deleteRecode
};