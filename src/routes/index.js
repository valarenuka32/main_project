const express = require("express");
const userRouter = require("./user.route");
const restaurantRouter = require("./restaurant.route");
const restauranttypeRouter = require("./restaurent_type.route");
const stateRouter = require("./state.route");
const paymentRouter = require("./payment.route");
const restaurantimgRouter = require("./restaurant_img.route");
const orderRouter = require("./order.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);
router.use("/restauranttype", restauranttypeRouter);
router.use("/state", stateRouter);
router.use("/payment", paymentRouter);
router.use("/restaurantimg", restaurantimgRouter);
router.use("/order", orderRouter);

module.exports = router;