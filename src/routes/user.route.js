const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");
const { auth } = require("../middlewares/auth");

const router = express.Router();

create
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.register
);

router.post(
    "/create-user",
    userController.login
);
// list
router.get(
    "/list",
    userController.getAllUser
);

router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
);

module.exports = router;