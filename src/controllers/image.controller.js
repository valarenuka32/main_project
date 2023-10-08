const { imageService } = require("../services");

// create
const createImage = async (req, res) => {
    try {
        const reqBody = req.body;
        const image = await imageService.createImage(reqBody);
        res.status(200).json({
            success: true,
            message: " Image create successfully!",
            data: { image }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//Image list
const imageList = async (req, res) => {
    try {
        const getList = await imageService.imageList();
        res.status(200).json({
            success: true,
            message: "Image list get successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update
const updateRecode = async (req, res) => {
    try {
        const imageId = req.params.imageId;
        const imageEx = await imageService.getimageById(imageId);
        if (!imageEx) {
            throw new Error("Image is not Found");
        };
        await imageService.updateRecode(imageId, req.Body);
        res.status(200).json({
            success: true,
            message: "Image update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const imageId = res.params.imageId;

        const imageEx = await imageService.getimageById(imageId);
        if (!imageEx) {
            throw new Error("Image is not found")
        }
        await imageService.deleteRecode(imageId);
        res.status(200).json({
            success: false,
            message: "Image delete successfully"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createImage,
    imageList,
    updateRecode,
    deleteRecode
};