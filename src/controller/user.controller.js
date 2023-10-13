const userService = require("../services");

const createUser = async (req, res) => {
    try {
        const reqbody = req.body
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}