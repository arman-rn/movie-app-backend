const { serverConfigs }      = require('../../config');
const jwt         = require('jsonwebtoken');
const {logger}      = require('../../library');


module.exports = (req, res, next) => {

  const authHeader = req.body.token || req.query.token || req.header('Authorization') || req.header('x-access-token');

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(' ')[1]

  logger.log.info(`token in middleware : ${token}`)

  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }

  let decodedToken

  try {
    decodedToken = jwt.verify(token, serverConfigs.SECRET_KEY);
  } 
  catch (error) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.userId = decodedToken.userId;

  next();

};

