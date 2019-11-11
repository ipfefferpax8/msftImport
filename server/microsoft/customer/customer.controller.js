const _ = require('lodash');

const CustomerStore = require('./customer.store');
const HttpErrors = require('../../services/httpErrors');

module.exports = {
  getCustomers,
  getSubscriptions,
  getSubscribedSkus,
  getUsers,
  getUserLicenses,
  getCustomerById
};

async function getCustomers(req, res) {
  return res.send(CustomerStore.getAll());
}

function getCustomerById(req, res) {
  const customer = CustomerStore.getById(req.params.customerId);
  if(!customer) {
    throw new HttpErrors.HttpNotFoundError();
  }

  return res.send(customer);
}

async function getSubscriptions(req, res) {
  throw new HttpErrors.HttpUnauthorizedError();
}

async function getSubscribedSkus(req, res) {
  res.send(CustomerStore.getSubscribedSkus())
}

async function getUsers(req, res) {

}

async function getUserLicenses(req, res) {

}