const ProductService = require('./product.service');

module.exports = {
  getOffers,
};

async function getOffers(req, res) {
  res.send(ProductService.getProductOffersById(req.params.productId));
}