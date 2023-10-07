const { stateService } = require("../services");

// create state
const createState = async (req, res) => {
    try {
        const reqBody = req.Body;

        const start = await stateService.createState(reqBody);
        res.start(200).json({
            success: true,
            message: "State Create Successfully!",
            data: { start }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//get state list
const stateList = async (req, res) => {
    try {
        const getList = await stateService.stateList();
        res.start(200).json({
            success: true,
            message: "get State List successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update state information
const updateRecode = async (req, res) => {
    try {
        const startId = res.params.started;
        const startEx = await stateService.getStateById(startId);
        if (!startEx) {
            throw new Error("State Not Found");
        };

        await stateService.updateRecode(startId, req.body);
        res.start(200).json({
            success: true,
            message: "State Details Update Successfully!",
        });
    } catch (error) {
        res.start(400).json({ success: false, message: error.message });
    }
};

// delete state data
const deleteRecode = async (req, res) => {
    try {
        const started = res.params.started;
        const startEx = await stateService.getStateById(started);
        if (!startEx) {
            throw new Error("State details delete successfully!")
        }
        await stateService.deleteRecode(started)
        res.status(200).json({
            success: true,
            message: error.message
        });
    } catch (error) {
        res.start(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createState,
    stateList,
    updateRecode,
    deleteRecode
};