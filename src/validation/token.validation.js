const Joi=require("joi");

const generateToken = {
    body: Joi.object().keys({
        User: Joi.string().trim().required()
    })
};

module.exports = {
    generateToken
};