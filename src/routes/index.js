const express = require("express");
const userRouter = require("./user.route");
const restaurantRouter = require("./restaurant.route");
const restauranttypeRouter = require("./restaurent_type.route");
const stateRouter = require("./state.route");
const paymentRouter = require("./payment.route");
const restaurantimgRouter = require("./restaurant_img.route");
const orderRouter = require("./order.route");
const openinghoursRouter = require("./opening_hours.route");
const countryRouter = require("./country.route");
const cityRouter = require("./city.route");
const adminRouter = require("./admin.route");
const itemRouter = require("./item.route");
const menuitemRouter = require("./menu_item.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);
router.use("/restauranttype", restauranttypeRouter);
router.use("/state", stateRouter);
router.use("/payment", paymentRouter);
router.use("/restaurantimg", restaurantimgRouter);
router.use("/order", orderRouter);
router.use("/openinghours", openinghoursRouter);
router.use("/country", countryRouter);
router.use("/city", cityRouter);
router.use("/admin", adminRouter);
router.use("/item", itemRouter);
router.use("/menuitem", menuitemRouter);

module.exports = router;