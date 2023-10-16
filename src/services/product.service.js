const {Product} = require("../models");

const createProduct = async (reqBody) => {
    return Product.create(reqBody)
};

const productList = async (req, res) => {
    return Product.find()
};

const getProductById = async (productId) => {
    return Product.findById(productId);
};

const deleteRecode = async (productId) => {
    return Product.findByIdAndDelete(productId)
};

const updateRecode = async (productId, updateBody) => {
    return Product.findByIdAndUpdate(productId, { $set: updateBody });
};

module.exports = {
    createProduct,
    productList,
    getProductById,
    getProductById,
    deleteRecode,
    updateRecode
};