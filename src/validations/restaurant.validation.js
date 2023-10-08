const Joi = require("joi");

// create restaurant
const createRestaurant = {
    body: Joi.object().keys({
        restaurant_name: Joi.string().trim().required(),
        restaurant_address: Joi.string().trim().required(),
        restaurant_contect_no: Joi.number().integer(),
        Owner: Joi.string(),
    })
};
module.exports = {
    createRestaurant
};