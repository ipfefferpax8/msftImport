const microsoftRouter = require('express-promise-router')();
const _ = require('lodash');

module.exports = routes;

const ENABLED_ROUTES = [
  require('./customer/customer.routes'),
  require('./product/product.routes'),
];

function routes(parentRouter) {
  _.each(ENABLED_ROUTES, (r) => r(microsoftRouter));
  parentRouter.use('/microsoft', microsoftRouter);
}