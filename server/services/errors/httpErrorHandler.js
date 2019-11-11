const log = require('../log');
const sprintf = require('sprintf');
const _ = require('lodash');
const C = require('../constant');

function httpErrorHandler(err, req, res, next) {
  const ERROR_FIELDS = (C.NODE_ENV === 'production') ? ['message', 'details'] : ['message', 'details', 'stack'];

  const code = err.httpCode || 500;
  log.warn(sprintf("Http Error Handler: code:%s, msg:%s, details:%s", code, err.message, err.details));
  log.info(sprintf("Http Error Handler: stack:%s", err.stack));

  return res.status(code).json(_.pick(err, ERROR_FIELDS));
}

module.exports = httpErrorHandler;