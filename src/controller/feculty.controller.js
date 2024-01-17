const { fecultyService } = require("../services");

// feculty cerate

const fecultyCreate = async (req, res) => {
    try {
        const reqBody = req.body;

        const feculty = await fecultyService.fecultyCreate(reqBody);

        res.status(200).json({
            success: true,
            message: "feculty create successfully!",
            data: { feculty }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// feculty list

const fecultyList = async (req, res) => {
    try {
        const getList = await fecultyService.fecultyList();

        res.status(200).json({
            success: true,
            message: "feculty list successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// feculty update

const updateDetailes = async (req, res) => {
    try {
        const fecultyId = req.params.fecultyId;

        const fecultyEx = await fecultyService.getfecultyById(fecultyId);

        if (!fecultyEx) {
            throw new Error("feculty not found")
        };

        await fecultyService.updateDetailes(fecultyId, reqbody);

        res.status(200).json({
            success: true,
            message: "feculty update successfully!",
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete feculty

const deleteDetails = async (req, res) => {
    try {
        const fecultyId = req.params.fecultyId;

        const fecultyEx = await fecultyService.getfecultyById(fecultyId);

        if (!fecultyEx) {
            throw new Error("feculty not found")
        };

        await fecultyService.deleteDetails(fecultyId);

        res.status(200).json({
            success: true,
            message: "feculty delete successfully!",
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    fecultyCreate,
    fecultyList,
    updateDetailes,
    deleteDetails
};