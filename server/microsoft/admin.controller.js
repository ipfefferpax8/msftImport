const CustomerStore = require('./customer/customer.store');

module.exports = {
  initMockData
};

function initMockData(req, res) {
  CustomerStore.init(parseInt(req.params.number, 10));
  res.status(200).send({ message: `Initializing ${req.params.number} Customers`});
}