const Joi = require("joi");

// create admin
const createOfferitem = {
    body: Joi.object().keys({
        Offer: Joi.string().trim().required(),
        Item: Joi.string().trim().required(),
        discounted_price: Joi.number().integer(),
        free_item_quantity: Joi.number().integer(),

    })
};

module.exports = {
    createOfferitem
};