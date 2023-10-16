const { tokenService } = require("../services");
const moment = require("moment");

const generateToken = async (req, res) => {
    try {
        const reqBody = req.body;

        reqBody.expire_time = moment().add(10, "minutes");

        const token = await tokenService.generateToken(reqBody);
        reqBody.token = token;

        const saveToken = await tokenService.savaToken(reqBody);
        res.
        status(200)
        .json({ success: true, message: "token created!", data: saveToken })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "something went worng!"
        });
    }
};

const verifyToken = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Token successfully verifide!",
        data: req.user
    })
};
module.exports = {
    generateToken,
    verifyToken
};