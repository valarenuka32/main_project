const { stateService } = require("../services");

// create state
const createState = async (req, res) => {
    try {
        const reqBody = req.Body;

        const start = await stateService.createState(reqBody);
        res.start(200).json({
            success: true,
            message: "state create successfully!",
            data: { start }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};