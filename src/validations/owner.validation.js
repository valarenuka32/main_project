const Joi = require("joi");

// cerate Owner
const createOwner = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        phone_no: Joi.number().integer(),
        email: Joi.string().trim().required(),
        address: Joi.string().trim().required(),
    })
};
module.exports = {
    createOwner
};