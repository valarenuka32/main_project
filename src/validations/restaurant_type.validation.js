const Joi=require(joi);

// restauranttype create
const createRestauranttype={
    body:Joi.onject().keys({
        restaurant_type:Joi.string().trim().required(),
    })
};

module.exports={
    createRestauranttype
};