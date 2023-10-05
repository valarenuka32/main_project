const Joi = require("joi");

// cerate user
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        password: Joi.number().integer(),
        phone_no: Joi.number().integer(),
    })
};
module.exports = {
    createUser
}