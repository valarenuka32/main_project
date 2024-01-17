const { studentService } = require("../services");

// student cerate

const studentCreate = async (req, res) => {
    try {
        const reqBody = req.body;

        const student = await studentService.studentCreate(reqBody);

        res.status(200).json({
            success: true,
            message: "student create successfully!",
            data: { student }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// student list

const studentList = async (req, res) => {
    try {
        const getList = await studentService.studentList();

        res.status(200).json({
            success: true,
            message: "student list successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// student update

const updateDetailes = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        const studentEx = await studentService.getStudentById(studentId);

        if (!studentEx) {
            throw new Error("student not found")
        };

        await studentService.updateDetailes(studentId, reqbody);

        res.status(200).json({
            success: true,
            message: "student update successfully!",
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete student

const deleteDetails = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        const studentEx = await studentService.getStudentById(studentId);

        if (!studentEx) {
            throw new Error("student not found")
        };

        await studentService.deleteDetails(studentId);

        res.status(200).json({
            success: true,
            message: "student delete successfully!",
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    studentCreate,
    studentList,
    updateDetailes,
    deleteDetails
};