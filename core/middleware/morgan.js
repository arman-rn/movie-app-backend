const morgan = require('morgan');
const chalk = require('chalk');

const morganMiddleware = morgan(function (tokens, req, res) {
    return [
        chalk.cyanBright(' - ' + tokens.date(req, res)),
        chalk.bgGreen(tokens.method(req, res)),
        chalk.redBright(tokens.status(req, res)),
        chalk.bgMagentaBright(tokens.url(req, res)),
        chalk.green(tokens['response-time'](req, res) + ' ms'),
        chalk.blueBright(tokens['remote-addr'](req, res)),
        chalk.yellowBright('from ' + tokens.referrer(req, res)),
        chalk.magenta(tokens['user-agent'](req, res)),
    ].join(' ');

});

module.exports = morganMiddleware;