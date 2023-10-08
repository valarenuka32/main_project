const Joi = require(joi);

// restaurant type create
const createRestauranttype = {
    body: Joi.onject().keys({
        restaurant_type: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        Restaurant: Joi.string(),
    })
};

module.exports = {
    createRestauranttype
};