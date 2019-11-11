const microsoftRouter = require('express-promise-router')();
const adminController = require('./admin.controller');
const _ = require('lodash');

module.exports = routes;

const ENABLED_ROUTES = [
  require('./customer/customer.routes'),
  require('./product/product.routes'),
];

function routes(parentRouter) {
  _.each(ENABLED_ROUTES, (r) => r(microsoftRouter));
  microsoftRouter.put('/admin/:number', adminController.initMockData);

  parentRouter.use('/microsoft', microsoftRouter);
}