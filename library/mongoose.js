const { mongoConfigs }  = require('../config');
const mongoose          = require('mongoose');
const logger            = require('./logger');

exports.connect = () => {

    return new Promise ((resolve, reject)=> {

      mongoose.connect(mongoConfigs.url, {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        })
        .then(() => {
          logger.log.info(`MongoDb connection successfully established to ${mongoConfigs.url}`);
          resolve(true)
        })
        .catch(error => {
          logger.log.error(`MongoDb error connecting to ${mongoConfigs.url}`, error);
          reject(error)
        });

    })

 }