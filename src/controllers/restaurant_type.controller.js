const { restauranttypeService } = require("../services");

// create restauranttype
const createRestauranttype = async (req, res) => {
    try {
        const reqBody = req.Body;

        const restauranttype = await restauranttypeService.createRestauranttype(reqBody);
        res.status(200).json({
            success: true,
            message: "restauranttype create successfully!",
            data: { restauranttype }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createRestauranttype
};