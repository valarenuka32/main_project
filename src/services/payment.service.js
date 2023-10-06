const { payment } = require("../model");

/**
 * Create payment
 * @param {object} reqBody
 * @returns {Promise<payment>}
 */

const createPayment = async (reqBody) => {
    return payment.create(reqBody)
};
const paymentList = async (req, res) => {
    return payment.find()
};

const getpaymentById = async (req, res) => {
    return payment.findById()
};

const updateRecode = async (paymentId, updateBody) => {
    return payment.findByIdAndUpdate(paymentId, { $set: updateBody });
};

const deleteRecode = async (paymentId) => {
    return payment.findByIdAndDelete(paymentId);
};

module.exports = {
    createPayment,
    paymentList,
    getpaymentById,
    updateRecode,
    deleteRecode
}