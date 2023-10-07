const { restaurantimage } = require("../model");

/**
 * Create restaurantimg
 * @param {object} reqBody
 * @returns {Promise<restaurantimage>}
 */

const createRestaurantimg = async (reqBody) => {
    return restaurantimage.create(reqBody)
};
const restaurantimgList = async (req, res) => {
    return restaurantimage.find()
};

const getrestaurantimgById = async (req, res) => {
    return restaurantimage.findById()
};

const updateRecode = async (restaurantimgId, updateBody) => {
    return restaurantimage.findByIdAndUpdate(restaurantimgId, { $set: updateBody });
};

const deleteRecode = async (restaurantimgId) => {
    return restaurantimage.findByIdAndDelete(restaurantimgId);
};

module.exports = {
    createRestaurantimg,
    restaurantimgList,
    getrestaurantimgById,
    updateRecode,
    deleteRecode
}