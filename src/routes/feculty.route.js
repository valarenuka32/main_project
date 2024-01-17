const express = require("express");
const { fecultyController } = require("../controller");

const router = express.Router();

// feculty create
router.post(
    "/feculty-create",
    fecultyController.fecultyCreate
);

// feculty list

router.get(
    "/feculty-list",
    fecultyController.fecultyList
);

// feculty update

router.put(
    "/update-detiles:/fecultyId",
    fecultyController.updateDetailes
);

// feculty delete

router.delete(
    "/delete-detailes:/fecultyId",
    fecultyController.deleteDetails
);

module.exports = router;