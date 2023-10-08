const Joi = require("joi");

// create Country
const createCountry = {
    body: Joi.object().keys({
        country_name: Joi.string().trim().required(),
    })
};

module.exports = {
    createCountry
};