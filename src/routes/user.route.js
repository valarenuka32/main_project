const express = require("express");
const userValidation = require("../validation");
const userController = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/crate-user",
    validate(userValidation.createUser),
    userController.createUser
);

// get list
router.get(
    "/list",
    userController.userList
);

// delete
router.delete(
    "/delete/:userId",
    userController.deleteRecode
);

// update
router.put(
    "/update/:userId",
    userController.updateRecode
);

module.exports = router;