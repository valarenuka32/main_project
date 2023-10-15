const express = require("express");
const productValidation = require("../validation");
const productController = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);

router.get(
    "/list",
    productController.productList
);

router.put(
    "/update/:productId",
    productController.updateRecode
);

router.delete(
    "/delete/:productId",
    productController.deleteRecode
);

module.exports = router;