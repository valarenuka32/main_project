const express = require("express");
const { restaurantimgValidation } = require("../validations");
const { restaurantimgController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-restaurant_img",
    validate(restaurantimgValidation.createRestaurantimg),
    restaurantimgController.createRestaurantimg
);

// list
router.get(
    "/list",
    restaurantimgController.restaurantimgList
);

// update
router.put(
    "/update-restaurant_img:restaurantimgId",
    restaurantimgController.updateRecode
);

// delete
router.delete(
    "/delete-restaurant_img:restaurantimgId",
    restaurantimgController.deleteRecode
);

module.exports = router;
