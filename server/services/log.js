'use strict';

const _ = require('lodash');
const { createLogger, format, transports } = require('winston');
const C = require('./constant');

const logger = createLogger({
  level: C.LOG_LEVEL,
  transports: [
    new transports.File({
      filename: 'combined.log',
      timestamp: true,
      maxsize: Math.pow(10, 8), //100mb
      tailable: true,
      maxFiles: 100,
      format: format.json(),
    }),
    new transports.File({ filename: 'error.log', level: 'error', format: format.json() }),
  ],
});

if(!C.isProd()) {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }))
}

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};

function log(level, message) {
  if (_.isUndefined(message)) {
    message = level;
    level = 'verbose';
  }

  logger.log(level, message);
}

module.exports = {
  error: _.partial(log, 'error'),
  warn: _.partial(log, 'warn'),
  info: _.partial(log, 'info'),
  stream: logger.stream,
};