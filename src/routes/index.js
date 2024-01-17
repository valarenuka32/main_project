const express = require("express");
const studentRouter = require("./student.route");
const fecultyRouter = require("./feculty.route");
const adminRouter = require("./admin.route");

const router = express.Router();

router.use("/student", studentRouter);
router.use("/feculty", fecultyRouter);
router.use("/admin", adminRouter);

module.exports = router;