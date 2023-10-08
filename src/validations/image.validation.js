const Joi = require(joi);

//Restaurant img validation
const createImage = {
    body: Joi.onject().keys({
        image: Joi.string().trim().required(),
    })
};

module.exports = {
    createImage
};