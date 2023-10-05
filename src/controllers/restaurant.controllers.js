const { restaurantService } = require("../services");

// create restaurant
const createRestaurant = async (req, res) => {
    try {
        const reqBody = req.body;

        const restaurant = await restaurantService.createRestaurant(reqBody);
        res.status(200).json({
            success: true,
            message: "restaurant create successfully !",
            data: { restaurant }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//restaurant  list
const restaurantList = async (req, res) => {
    try {
        const getlist = await restaurantService.restaurantList();
        res.status(200).json({
            success: true,
            message: "get restaurant list successfully!",
            data: { getlist }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const restaurantId = res.params.restaurantId;
        const restaurantEx = await restaurantService.getrestaurantById(restaurantId);
        if (!restaurantEx) {
            throw new Error("restaurant not found")
        }
        await restaurantService.updateRecode(restaurantId, req.body);
        res.status(200).json({
            success: true,
            message: "restaurant details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const restaurantId = res.params.restaurantId;
        const restaurantEx = await restaurantService.getrestaurantById(restaurantId);
        if (!restaurantEx) {
            throw new Error("restaurant detiles not found")
        }
        await restaurantService.deleteRecode(restaurantId);
        res.status(200).json({
            success: false,
            message: "restaurant detiles delete successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};
module.exports = {
    createRestaurant,
    restaurantList,
    updateRecode,
    deleteRecode
};