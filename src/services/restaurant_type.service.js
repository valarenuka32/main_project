const { restauranttype } = require("../model");

/**
 * Create restaurant type
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createRestauranttype = async (reqBody) => {
    return restauranttype.create(reqBody);
};

const restauranttypeList = async (req, res) => {
    return restauranttype.find();
};

const deleteRecode = async (restauranttypeId) => {
    return restauranttype.findByIdAndDelete(restauranttypeId);
};

const updateRecode = async (restauranttypeId, updateBody) => {
    return restauranttype.findByIdAndUpdate(restauranttypeId, { $set: updateBody });
};

const getrestauranttypeById = async (restauranttypeId) => {
    return restauranttype.findById(restauranttypeId);
};

module.exports = {
    createRestauranttype,
    restauranttypeList,
    deleteRecode,
    updateRecode,
    getrestauranttypeById
}