const express = require("express");
const auth = require("../middlewares/auth");
const { tokenValidation } = require("../validation");
const { tokenController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

router.post(
    "/create-token",
    validate(tokenValidation.generateToken),
    tokenController.generateToken
);

router.get(
    "/verify-token",
    auth(),
    tokenController.verifyToken
);

module.exports = router;