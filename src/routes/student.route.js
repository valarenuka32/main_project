const express = require("express");
const { studentController } = require("../controller");

const router = express.Router();

// user create
router.post(
    "/student-create",
    studentController.studentCreate
);

// student list

router.get(
    "/student-list",
    studentController.studentList
);

// student update

router.put(
    "/update-detiles:/studentId",
    studentController.updateDetailes
);

// student delete

router.delete(
    "/delete-detailes:/studentId",
    studentController.deleteDetails
);

module.exports = router;