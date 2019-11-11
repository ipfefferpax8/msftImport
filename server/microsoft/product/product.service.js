const ProductStore = require('./product.store');
const _ = require('lodash');

module.exports = {
  getProductOffersById,
  createProductSkus
};

function createProductSkus() {
  const productSkus = ProductStore.getKnownPossibleSkus();
  const numberOfSkus = Math.ceil(Math.random() * productSkus.length);
  return _.map(_.take(_.shuffle(productSkus), numberOfSkus), createProductSku);
}

function createProductSku(productSku) {
  return {
    productSku,
    activeUnits: Math.ceil(Math.random() * 20),
  }
}

function getProductOffersById(id) {
  return {
    items: ProductStore.getProductOffersByProductId(id)
  }
}