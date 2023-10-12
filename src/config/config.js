const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(5000),
    MONGODB_URL: Joi.string().trim().description("MONGODB_URL")
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
        option: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
};