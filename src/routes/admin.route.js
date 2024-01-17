const express = require("express");
const { adminController } = require("../controller");

const router = express.Router();

// admin create
router.post(
    "/admin-create",
    adminController.adminCreate
);

// admin list

router.get(
    "/admin-list",
    adminController.adminList
);

// admin update

router.put(
    "/update-detiles:/adminId",
    adminController.updateDetailes
);

// admin delete

router.delete(
    "/delete-detailes:/adminId",
    adminController.deleteDetails
);

module.exports = router;