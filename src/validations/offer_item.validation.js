const Joi = require("joi");

// create admin
const createOfferitem = {
    body: Joi.object().keys({
        discounted_price: Joi.number().integer(),
        free_item_quantity: Joi.number().integer(),
        Offer: Joi.string().required(),
        Item: Joi.string().required(),

    })
};

module.exports = {
    createOfferitem
};