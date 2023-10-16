const {userService} = require("../services");

const createUser = async (req, res) => {
    try {
        const reqBody = req.body

        const user = await userService.createUser(reqBody);
        res.status(200).json({
            success: true,
            message: "user cerate successfully",
            data: { user }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const userList = async (req, res) => {
    try {
        const getList = await userService.userList();
        res.status(200).json({
            success: true,
            message: "user list cerate successfully",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }
        await userService.updateRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user updata successfully!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }
        await userService.deleteRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user delete successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createUser,
    userList,
    updateRecode,
    deleteRecode
};