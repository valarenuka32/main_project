const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.register
);

router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.login
);
// list
router.get(
    "/list",
    userController.getAllUser
);

module.exports = router;