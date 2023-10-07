const express = require("express");
const { deliverydriversValidation } = require("../validations");
const { deliverydriversController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-deliverydrivers",
    validate(deliverydriversValidation.createDeliveryDrivers),
    deliverydriversController.createDeliveryDrivers
);

// list
router.get(
    "/list",
    deliverydriversController.deliveryDriversList
);

// update
router.put(
    "/update-deliverydrivers:deliverydriversId",
    deliverydriversController.updateRecode
);

// delete
router.delete(
    "/delete-deliverydrivers:deliverydriversId",
    deliverydriversController.deleteRecode
);

module.exports = router;
