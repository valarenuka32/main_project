const Joi=require(joi);

//Restaurant img validation
const createRestaurantimg={
    body:Joi.onject().keys({
        restaurant_image:Joi.string().trim().required(),
    })
};

module.exports={
    createRestaurantimg
};