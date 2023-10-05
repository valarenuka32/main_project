const { restaurant } = require("../model");

const createRestaurant = async (reqbody) => {
    return restaurant.create(reqbody)
};

const restaurantList = async (req, res) => {
    return restaurant.find();
};

const deleteRecode = async (restaurantId) => {
    return restaurant.findByIdAndDelete(restaurantId);
};

const updateRecode = async (restaurantId, updateBody) => {
    return restaurant.updateRecode(restaurantId, { $set: updateBody });
};

const getrestaurantById = async (restaurantId) => {
    return restaurant.findById(restaurantId);
};

module.exports = {
    createRestaurant,
    restaurantList,
    deleteRecode,
    updateRecode,
    getrestaurantById
};