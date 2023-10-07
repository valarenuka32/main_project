const Joi = require("joi");

// create state
const createCountry = {
    body: Joi.object().keys({
        country_name: Joi().string().trim().required(),
    })
};

module.exports = {
    createCountry
};