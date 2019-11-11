const ProductStore = require('./product.store');

module.exports = {
  getRandomProductSkus,
  getProductOffersById
};

function getRandomProductSkus() {
  return ProductStore.getKnownPossibleSkus();
}

function getProductOffersById(id) {
  return {
    items: ProductStore.getProductOffersByProductId(id)
  }
}