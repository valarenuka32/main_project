const { feculty } = require("../models");

// feculty

const fecultyCreate = async (reqBody) => {
    return feculty.create(reqBody)
};

const fecultyList = async (req, res) => {
    return feculty.find()
    .populate("admin")
};

const updateDetailes = async (fecultyId, updatebody) => {
    return feculty.findByIdAndUpdate(fecultyId, { $set: updatebody });
};

const deleteDetails = async (fecultyId) => {
    return feculty.findByIdAndDelete(fecultyId)
};

const getfecultyById = async (fecultyId) => {
    return feculty.findById(fecultyId)
};
module.exports = {
    fecultyCreate,
    fecultyList,
    updateDetailes,
    deleteDetails,
    getfecultyById
};