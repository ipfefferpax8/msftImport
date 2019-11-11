const CustomerService = require('./customer.service');
const log = require('../../services/log');
const _ = require('lodash');
const DEFAULT_NUMBER_OF_CUSTOMERS = 100;

let customers;
let customersById;
let customersByTenantId;
const subscribedSkusByTenantId = {};

module.exports = {
  init,
  getAll,
  getById,
  getSubscribedSkus
};

function init(numberOfCustomers) {
  if(!numberOfCustomers) {
    numberOfCustomers = DEFAULT_NUMBER_OF_CUSTOMERS
  }
  log.info(`Mock Data initializing ${numberOfCustomers} customers`);

  customers = _.map(_.range(numberOfCustomers), CustomerService.createCustomer);
  _.each(customers, c => subscribedSkusByTenantId[c.tenantId] = CustomerService.createSubscribedSkus(c.tenantId));
  customersById = _.keyBy(customers, 'id');
  customersByTenantId = _.keyBy(customers, 'tenantId');
}

function getAll() {
  return CustomerService.createCustomerWrap(customers);
}

function getById(id) {
  return _.get(customersById, id);
}

function getSubscribedSkus(tenantId) {
  return {
    items: _.get(subscribedSkusByTenantId, tenantId)
  };
}