const express = require("express");
const studentRouter = require("./student.route");
const fecultyRouter = require("./feculty.route");
const adminRouter = require("./admin.route");

const router = express.Router();

app.use("/student", studentRouter);
app.use("/feculty", fecultyRouter);
app.use("/admin", adminRouter);

module.exports = router;