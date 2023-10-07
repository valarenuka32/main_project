const { country } = require("../model");

/**
 * Create country
 * @param {object} reqBody
 * @returns {Promise<country>}
 */

const createCountry = async (reqBody) => {
    return country.create(reqBody);
};
const countryList = async (req, res) => {
    return country.find();
};

const getcountryById = async (countryId) => {
    return country.findById(countryId);
};

const updateRecode = async (countryId, updateBody) => {
    return country.findByIdAndUpdate(countryId, { $set: updateBody });
};

const deleteRecode = async (countryId) => {
    return country.findByIdAndDelete(countryId);
};

module.exports = {
    createCountry,
    countryList,
    getcountryById,
    updateRecode,
    deleteRecode
};