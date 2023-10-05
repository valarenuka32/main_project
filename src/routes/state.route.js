const express = require("express");
const { stateValidation } = require("../validations");
const { stateController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();
// create
router.post(
    "/create-start",
    validate(stateValidation.createState),
    stateController.createState
);
// list
router.get(
    "/list",
    stateController.stateList
);
// update
router.put(
    "/update-recode",
    stateController.updateRecode
);
// delete
router.delete(
    "/delete-recode",
    stateController.deleteRecode
);

module.exports = router;