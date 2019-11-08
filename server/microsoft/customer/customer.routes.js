const customerRouter = require('express-promise-router')();
const controller = require('./customer.controller');
const log = require('../../services/log');

//company ---
// get customers - https://api.partnercenter.microsoft.com/v1/customers
// get subscriptions by customer - https://api.partnercenter.microsoft.com/v1/customers/$tenantId/subscriptions
// get licenses for a company - https://api.partnercenter.microsoft.com/v1/customers/$tenantId/subscribedskus?licenseGroupIds=Group1
// get users for a company - https://api.partnercenter.microsoft.com/v1/customers/${tenantId}/users
// get licenses for user -- https://api.partnercenter.microsoft.com/v1/customers/${tenantId}/users/${userId}/licenses

module.exports = routes;

function routes(parentRouter) {
  log.info('Initializing Customer routes');
  customerRouter.get('/', controller.getCustomers);
  customerRouter.get('/:tenantId/subscriptions', controller.getSubscriptions);
  customerRouter.get('/:tenantId/subscribedSkus', controller.getSubscribedSkus);
  customerRouter.get('/:tenantId/users', controller.getUsers);
  customerRouter.get('/:tenantId/users/:userId/licenses', controller.getUserLicenses);

  parentRouter.use('/customer', customerRouter);
}