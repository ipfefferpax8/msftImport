const productRoutes = require('express-promise-router')();
const controller = require('./product.controller');
const log = require('../../services/log');

//product --
// get offers for product id -- https://api.partnercenter.microsoft.com/v1/products/$productId/skus?country=$regionISO

module.exports = routes;

function routes(parentRouter) {
  log.info('Initializing Product routes');
  productRoutes.get('/:productId/skus', controller.getSkus);
  parentRouter.use('/product', productRoutes);
}