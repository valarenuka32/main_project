const moment = require("moment");
const { User } = require("../model")
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";
const { userService, emailService } = require("../services");
const { auth } = require("../middlewares/auth");

// create
const register = async (req, res) => {
    // validation;
    const { email, password, role } = req.body;

    const hashPassword = await bcrypt.hash(password, 8);

    let option = {
        email,
        role,
        exp: moment().add(1, "days").unix(),
    };

    const token = await jwt.sign(option, jwtSecrectKey);

    const filter = {
        email,
        role,
        password: hashPassword,
        token,
    };

    const data = await userService.createUser(filter);

    res.status(200).json({ data });
};

// login
const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const findUser = await userService.findUserByEmail({ email });

        if (!findUser) throw Error("User not found");

        const successPassword = await bcrypt.compare(password, findUser.password);
        if (!successPassword) throw Error("Incorrect password");
        let option = {
            email,
            role: findUser.role,
            exp: moment().add(1, "days").unix(),
        };

        let token;
        if (findUser && successPassword) {
            token = await jwt.sign(option, jwtSecrectKey)
        }

        let data;
        if (token) {
            data = await userService.findUserAndUpdate(findUser._id, token);
        }
        res.status(200).json({ data });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Get alluser
const getAllUser = async (req, res) => {
    try {
        console.log(req, headers.token, '');
        await auth(req, headers.token, ['token']);

        const data = await userService.getAllUser({ role: "admin" });
        res.status(200).json({ data });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
// semd maile
const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;
        const sendMail = await emailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );
        if (!sendMail) {
            throw new Error("Something went wrong, please try again or later")
        }
        res.status(200).json({
            success: true,
            message: "Email send successfully "
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
module.exports = {
    register,
    login,
    getAllUser,
    sendMail
};