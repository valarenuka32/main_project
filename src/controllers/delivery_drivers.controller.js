const { deliverydriversService } = require("../services");

// create
const createDeliveryDrivers = async (req, res) => {
    try {
        const reqBody = req.body;

        const deliverydrivers = await deliverydriversService.createDeliveryDrivers(reqBody);
        res.status(200).json({
            success: true,
            message: "Delivery drivers create successfully!",
            data: { deliverydrivers },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get opening hours list
const deliveryDriversList = async (req, res) => {
    try {
        const getList = await deliverydriversService.deliveryDriversList();
        res.status(200).json({
            success: true,
            message: "Get delivery drivers list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const deliverydriversId = req.params.deliverydriversId;

        const deliverydriversEx = await deliverydriversService.getdeliverydriversById(deliverydriversId);
        if (!deliverydriversEx) {
            throw new Error("Delivery drivers not found");
        }

        await deliverydriversService.updateRecode(deliverydriversId, req.body);
        res.status(200).json({
            success: true,
            message: "Delivery drivers detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const deliverydriversId = req.params.deliverydriversId;

        const deliverydriversEx = await deliverydriversService.getdeliverydriversById(deliverydriversId);
        if (!deliverydriversEx) {
            throw new Error("Delivery drivers not found");
        };

        await deliverydriversService.deleteRecode(deliverydriversId, req.body);
        res.status(200).json({
            success: true,
            message: "Delivery drivers detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createDeliveryDrivers,
    deliveryDriversList,
    updateRecode,
    deleteRecode
};