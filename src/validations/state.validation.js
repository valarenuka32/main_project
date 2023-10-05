const Joi = require("joi");

// create state
const createState = {
    body: Joi.object().keys({
        state_name: Joi().string().trim().required(),
    })
};

module.exports = {
    createState
};