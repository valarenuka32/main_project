const { Restaurantimage } = require("../model");

/**
 * Create Restaurant img
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createRestaurantimg = async (reqBody) => {
    return Restaurantimage.create(reqBody)
};
const restaurantimgList = async (req, res) => {
    return Restaurantimage.find()
};

const getrestaurantimgById = async (restaurantimgId) => {
    return Restaurantimage.findById(restaurantimgId);
};

const updateRecode = async (restaurantimgId, updateBody) => {
    return Restaurantimage.findByIdAndUpdate(restaurantimgId, { $set: updateBody });
};

const deleteRecode = async (restaurantimgId) => {
    return Restaurantimage.findByIdAndDelete(restaurantimgId);
};

module.exports = {
    createRestaurantimg,
    restaurantimgList,
    getrestaurantimgById,
    updateRecode,
    deleteRecode
}