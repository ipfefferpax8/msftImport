const customerRouter = require('express-promise-router')();
const controller = require('./customer.controller');
const customerStore = require('./customer.store');
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
  customerStore.init();
  customerRouter.get('/', controller.getCustomers);
  customerRouter.get('/:customerId', controller.getCustomerById);
  customerRouter.get('/:tenantId/subscribedSkus', controller.getSubscribedSkus);

  // 401 on this for now
  customerRouter.get('/:tenantId/subscription', controller.getSubscriptions);

  // used in user assignment todo
  customerRouter.get('/:tenantId/users', controller.getUsers);
  customerRouter.get('/:tenantId/users/:userId/licenses', controller.getUserLicenses);

  parentRouter.use('/customer', customerRouter);
}