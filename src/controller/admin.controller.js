const { adminService } = require("../services");

// admin cerate

const adminCreate = async (req, res) => {
    try {
        const reqBody = req.body;

        const admin = await adminService.adminCreate(reqBody);

        res.status(200).json({
            success: true,
            message: "admin create successfully!",
            data: { admin }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// admin list

const adminList = async (req, res) => {
    try {
        const getList = await adminService.adminList();

        res.status(200).json({
            success: true,
            message: "admin list successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// admin update

const updateDetailes = async (req, res) => {
    try {
        const adminId = req.params.adminId;

        const adminEx = await adminService.getadminById(adminId);

        if (!adminEx) {
            throw new Error("admin not found")
        };

        await adminService.updateDetailes(adminId, reqbody);

        res.status(200).json({
            success: true,
            message: "admin update successfully!",
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete admin

const deleteDetails = async (req, res) => {
    try {
        const adminId = req.params.adminId;

        const adminEx = await adminService.getadminById(adminId);

        if (!adminEx) {
            throw new Error("admin not found")
        };

        await adminService.deleteDetails(adminId);

        res.status(200).json({
            success: true,
            message: "admin delete successfully!",
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    adminCreate,
    adminList,
    updateDetailes,
    deleteDetails
};