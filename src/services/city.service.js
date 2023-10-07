const { city } = require("../model");

/**
 * Create city
 * @param {object} reqBody
 * @returns {Promise<city>}
 */

const createCity = async (reqBody) => {
    return city.create(reqBody);
};
const cityList = async (req, res) => {
    return city.find();
};

const getcityById = async (cityId) => {
    return city.findById(cityId);
};

const updateRecode = async (cityId, updateBody) => {
    return city.findByIdAndUpdate(cityId, { $set: updateBody });
};

const deleteRecode = async (cityId) => {
    return city.findByIdAndDelete(cityId);
};

module.exports = {
    createCity,
    cityList,
    getcityById,
    updateRecode,
    deleteRecode
};