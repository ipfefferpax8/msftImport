const _ = require('lodash');

const possibleSubscribedSkus = [{
  id: '',
  name: '',
},{
  id: '',
  name: '',
},{
  id: '',
  name: '',
},{
  id: '',
  name: '',
},{
  id: '',
  name: '',
},{
  id: '',
  name: '',
},{
  id: '',
  name: '',
},{
  id: '',
  name: '',
}];

const offersById = {

};

module.exports = {
  getKnownPossibleSkus,
  getProductOffersByProductId,
};

function getKnownPossibleSkus() {
  return possibleSubscribedSkus;
}

function getProductOffersByProductId(id) {
  return _.get(offersById, id);
}