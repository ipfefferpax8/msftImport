const faker = require('faker');
const uuid = require('uuid/v4');
const ProductService = require('../product/product.service');

module.exports = {
  createCustomer,
  createCustomerWrap,
  createSubscribedSkus,
};

function createCustomerWrap(customers) {
  return {
    totalCount: customers.length,
    items: customers,
    links: {
      self: {
        uri: "/v1/customers?size=40",
        method: "GET",
        headers: []
      }
    },
    attributes: {
      objectType: "Collection"
    }
  }
}

function createSubscribedSkus() {
  return {
    productSku: ProductService.getRandomProductSkus()
  };
}

function createCustomer() {
  const id = uuid();

  return {
    id,
    companyProfile: {
      tenantId: uuid(),
      domain: faker.internet.domainName(),
      companyName: faker.company.companyName(),
      address: {
        phoneNumber: faker.phone.phoneNumber(),
        postalCode: faker.address.zipCode(),
        city: faker.address.city(),
        state: faker.address.state(),
        addressLine1: faker.address.streetAddress(),
        country: 'US',
      },
      attributes: {
        objectType: 'CustomerCompanyProfile'
      },
    },
    relationshipToPartner: 'reseller',
    attributes: {
      objectType: 'Customer'
    },
    links: {
      self: {
        uri: `/microsoft/customer/${id}`
      }
    }
  }
}