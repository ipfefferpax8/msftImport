const router = require('express-promise-router')();
const controller = require('./microsoft.controller');

module.exports = routes;

function routes(app) {
  router.get('/', controller.get);
  app.use('/microsoft', router);
}