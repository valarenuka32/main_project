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
const orderitemRouter = require("./order_item.route");
const cartRouter = require("./cart.route");
const offerRouter = require("./offer.route");
const offeritemRouter = require("./offer_item.route");
const deliveryaddressesRouter = require("./delivery_addresses.route");
const deliverydriversRouter = require("./delivery_drivers.route");
const deliveriesRouter = require("./deliveries.route");
const commentRouter = require("./comment.route");
const reviewRouter = require("./review.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);
router.use("/restaurant_type", restauranttypeRouter);
router.use("/state", stateRouter);
router.use("/payment", paymentRouter);
router.use("/restaurant_img", restaurantimgRouter);
router.use("/order", orderRouter);
router.use("/opening_hours", openinghoursRouter);
router.use("/country", countryRouter);
router.use("/city", cityRouter);
router.use("/admin", adminRouter);
router.use("/item", itemRouter);
router.use("/menu_item", menuitemRouter);
router.use("/order_item", orderitemRouter);
router.use("/cart", cartRouter);
router.use("/offer", offerRouter);
router.use("/offer_item", offeritemRouter);
router.use("/delivery_addresses", deliveryaddressesRouter);
router.use("/delivery_drivers", deliverydriversRouter);
router.use("/deliveries", deliveriesRouter);
router.use("/comment", commentRouter);
router.use("/review", reviewRouter);

module.exports = router;