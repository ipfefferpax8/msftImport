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
  log.info(`Mock Data initializing custom customers`);

//  customers = _.map(_.range(numberOfCustomers), CustomerService.createCustomer);
//  _.each(customers, c => subscribedSkusByTenantId[c.tenantId] = CustomerService.createSubscribedSkus(c.tenantId));

  const customer1 = CustomerService.createCustomer();
  customer1.companyProfile.companyName = 'no Phone Number';
  customer1.companyProfile.address.phoneNumber = '';

  const customer2 = CustomerService.createCustomer();
  customer2.companyProfile.companyName = 'Bad Phone Number';
  customer2.companyProfile.address.phoneNumber = 'Mitchell is the Best';

  const customer3 = CustomerService.createCustomer();
  customer3.companyProfile.companyName = 'No Address';
  customer3.companyProfile.address.addressLine1 = '';

  const customer4 = CustomerService.createCustomer();
  customer4.companyProfile.companyName = 'No City';
  customer4.companyProfile.address.city = '';

  const customer5 = CustomerService.createCustomer();
  customer5.companyProfile.companyName = 'No State';
  customer5.companyProfile.address.state = '';

  const customer6 = CustomerService.createCustomer();
  customer6.companyProfile.companyName = 'No Country';
  customer6.companyProfile.address.country = '';

  customers = [customer1, customer2, customer3, customer4, customer5, customer6];
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
