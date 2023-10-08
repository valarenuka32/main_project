const Joi = require("joi");

//Restaurant img validation
const createImage = {
    body: Joi.object().keys({
        image: Joi.string().trim().required(),
    })
};

module.exports = {
    createImage
};