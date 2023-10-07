const Joi = require("joi");

// create order validation
const createOrder = {
    body: Joi.object().keys({
        order_data: Joi.date().required(),
        totalamount:Joi.string().trim().required(),
    })
};

module.exports = {
    createOrder
};