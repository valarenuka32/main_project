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

// Restauranttype list
const restauranttypeList = async (req, res) => {
    try {
        const getlist = await restauranttypeService.restauranttypeList();
        res.status(200).json({
            success: true,
            message: "restauranttype list create successfully",
            data: { getlist }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const restauranttypeId = res.params.req.body;
        const restaurantEx = await restauranttypeService.getrestauranttypeById(restauranttypeId);
        if (!restaurantEx) {
            throw new Error("Restaurant type is not found");
        }
        await restauranttypeService.updateRecode(restauranttypeId, req.Body);
        res.status(200).json({
            success: true,
            message: "Restaurant type update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const restauranttypeId = req.params.req.Body;
        const restaurantEx = await restauranttypeId.getrestauranttypeById(restauranttypeId);
        if (!restaurantEx) {
            throw new Error("Restaurant type is not found");
        }

        await restauranttypeId.deleteRecode(restauranttypeId);
        res.status(200).json({
            success: true,
            message: "Restaurant type delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createRestauranttype,
    restauranttypeList,
    updateRecode,
    deleteRecode
};