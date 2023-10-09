const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");
const { auth } = require("../middlewares/auth");

const router = express.Router();

// create
router.post(
    "/register",
    validate(userValidation.createUser),
    userController.register
);

router.post(
    "/login",
    userController.login
);
// list
router.get(
    "/alluserlist",
    userController.getAllUser
);

// create
router.post(
    "/create-state",
    validate(userValidation.createUser),
    userController.createUser
);
// list
router.get(
    "/list",
    userController.userList
);
// update
router.put(
    "/update-recode/:userId",
    userController.updateRecode
);
// delete
router.delete(
    "/delete-recode/:userId",
    userController.deleteRecode
);

router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
);

module.exports = router;