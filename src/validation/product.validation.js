const Joi = require("joi");

const createProduct = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        price: Joi.number().required(),
        product_desc: Joi.string().trim().required(),
    })
};

module.exports = {
    createProduct
};