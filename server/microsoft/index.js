const log = require('../services/log');
const microsoftRouter = require('./microsoft.routes');

module.exports = init;

function init(parentRouter) {
  log.info('Initializing Microsoft Routes');
  microsoftRouter(parentRouter);
}