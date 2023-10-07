const { order } = require("../model");

/**
 * Create order
 * @param {object} reqBody
 * @returns {Promise<order>}
 */

const createOrder = async (reqBody) => {
    return order.create(reqBody);
};
const orderList = async (req, res) => {
    return order.find();
};

const getorderById = async (req, res) => {
    return order.findById();
};

const updateRecode = async (orderId, updateBody) => {
    return order.findByIdAndUpdate(orderId, { $set: updateBody });
};

const deleteRecode = async (orderId) => {
    return order.findByIdAndDelete(orderId);
};

module.exports = {
    createOrder,
    orderList,
    getorderById,
    updateRecode,
    deleteRecode
}