const { paymentService } = require("../services");

// create
const createPayment = async (req, res) => {
    try {
        const reqBody = req.body;
        const payment = await paymentService.createPayment(reqBody);
        res.status(200).json({
            success: true,
            message: "Patment create successfully!",
            data: { payment }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// list
const paymentList = async (req, res) => {
    try {
        const getList = await paymentService.paymentList();
        res.status(200).json({
            success: true,
            message: "Payment list get successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update 
const updateRecode=async(req,res)=>{
try {
    
} catch (error) {

}
};

module.exports = {
    createPayment,
    paymentList
}