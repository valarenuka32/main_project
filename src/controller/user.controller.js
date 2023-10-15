const userService = require("../services");

const createUser = async (req, res) => {
    try {
        const reqbody = req.body

        const user = await userService.createUser(reqbody);
        res.status(200).json({
            success: true,
            message: "user cerate successfully",
            data: { user }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={
    createUser
};