const joi = require('joi');

const envVarsSchema = joi
  .object({
    MONGODB_URL: joi.string().required(),
    MONGODB_DB: joi.string().required(),
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  url: envVars.MONGODB_URL,
  db: envVars.MONGODB_DB,
};

module.exports = config;
