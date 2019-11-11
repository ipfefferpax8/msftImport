const httpErrorFactory = require('./errors/httpErrorFactory');

module.exports = {
  HttpErrorHandler: require('./errors/httpErrorHandler'),
  HttpBadRequestError: httpErrorFactory('HttpBadRequestError', 'Bad Request', 400),
  HttpUnauthorizedError: httpErrorFactory('HttpUnauthorizedError', 'Unauthorized', 401),
  HttpForbiddenError: httpErrorFactory('HttpForbiddenError', 'Forbidden', 403),
  HttpNotFoundError: httpErrorFactory('HttpNotFoundError', 'Not Found', 404),
  HttpInternalServerError: httpErrorFactory('HttpInternalServerError', 'Internal Server Error', 500),
  HttpNotImplementedError: httpErrorFactory('HttpNotImplementedError', 'NotImplemented', 501),
  HttpServiceUnavailable: httpErrorFactory('HttpServiceUnavailable', 'Unavailable', 503),
  HttpInsufficientStorageError: httpErrorFactory('HttpInsufficientStorageError', 'InsufficientStorage', 507)
};