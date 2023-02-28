const joi = require('joi');

const envVarsSchema = joi.object({
    WEB_API_PORT   : joi.number().required(),
    WEB_API_URL    : joi.string().required(),
    APPNAME        : joi.string().required(),
    LATEST_VERSION : joi.string().required(),
    SECRET_KEY     : joi.string().required(),
}).unknown().required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
    PORT           : envVars.WEB_API_PORT,
    API_URL        : envVars.WEB_API_URL,
    APPNAME        : envVars.APPNAME,
    LATEST_VERSION : envVars.LATEST_VERSION,
    SECRET_KEY     : envVars.SECRET_KEY
}

module.exports = config