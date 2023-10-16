const express = require("express");
const userRoute = require("./user.route");
const productRoute = require("./product.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/product", productRoute);
router.use("/Token", tokenRoute);

module.exports = router;