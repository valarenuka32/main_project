const { restaurantimgService } = require("../services");

// create
const createRestaurantimg = async (req, res) => {
    try {
        const reqBody = req.body;
        const restaurantimg = await restaurantimgService.createRestaurantimg(reqBody);
        res.status(200).json({
            success: true,
            message: "Restaurant img create successfully!",
            data: { restaurantimg }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//restaurant img list
const restaurantimgList = async (req, res) => {
    try {
        const getList = await restaurantimgService.restaurantimgList();
        res.status(200).json({
            success: true,
            message: "Restaurantimg list get successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const restaurantimgId = req.params.restaurantimgId;
        const restaurantimgEx = await restaurantimgService.getrestaurantimgById(restaurantimgId);
        if (!restaurantimgEx) {
            throw new Error("Restaurant img is not Found");
        };
        await restaurantimgService.updateRecode(restaurantimgId, req.Body);
        res.status(200).json({
            success: true,
            message: "Restaurant img update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const restaurantimgId = res.params.restaurantimgId;

        const restaurantimgEx = await restaurantimgService.getrestaurantimgById(restaurantimgId);
        if (!restaurantimgEx) {
            throw new Error("Restaurant img is not found")
        }
        await restaurantimgService.deleteRecode(restaurantimgId);
        res.status(200).json({
            success: false,
            message: "Restaurant img delete successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createRestaurantimg,
    restaurantimgList,
    updateRecode,
    deleteRecode
};