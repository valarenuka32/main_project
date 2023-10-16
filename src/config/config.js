const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(5000),
    MONGODB_URL: Joi.string().trim().description("MONGODB_URL"),
    JWT_SECRET_KEY:Joi.string()
    .description("JWT SECRET KEY")
    .default("this is jwtsecret_key")
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env)

if (error) {
    console.log("config error", error);
};

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
    jwt:{
        secret_key:envVars.JWT_SECRET_KEY
    }
};