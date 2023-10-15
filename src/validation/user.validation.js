const Joi=require("joi");

const createUser={
    body:Joi.object().keys({
        first_name:Joi.string().trim().required(),
        last_name:Joi.string().trim().required(),
        password:Joi.string().required(),
        email:Joi.string().required(),
    })
};
module.exports={
    createUser
};