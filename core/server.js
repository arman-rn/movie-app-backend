const app = require('./express');

const config = require('../config');
const { mongoose, logger } = require('../library');

const start = async () => {
  await mongoose.connect();

  app.listen(config.serverConfigs.PORT, () => {
    logger.log.info(`Server started on port ${config.serverConfigs.PORT}.`);
  });
};

process.on('unhandledRejection', (err) => {
  logger.log.error('Server stop with error : ', err);
  process.exit(1);
});

exports.start = start;
