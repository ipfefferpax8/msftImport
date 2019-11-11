const _ = require('lodash');

const possibleSubscribedSkus = [{
  id: '0c266dff-15dd-4b49-8397-2bb16070ed52',
  name: 'Audio Conferencing',
},{
  id: 'c52ea49f-fe5d-4e95-93ba-1de91d380f89',
  name: 'Azure Information Protection Premium P1',
},{
  id: '0dab259f-bf13-4952-b7f8-7db8f131b28d',
  name: 'Domestic Calling Plan',
},{
  id: 'efccb6f7-5641-4e0e-bd10-b4976e1bf68e',
  name: 'Enterprise Mobility + Security E3',
},{
  id: '05e9a617-0261-4cee-bb44-138d3ef5d965',
  name: 'Microsoft 365 E3',
},{
  id: '06ebc4ee-1bb5-47dd-8120-11324bc54e06',
  name: 'Microsoft 365 E5',
},{
  id: '314c4481-f395-4525-be8b-2ec4bb1e9d91',
  name: 'Office 365 A1 for students',
},{
  id: 'e578b273-6db4-4691-bba0-8d691f4da603',
  name: 'Office 365 A3 for faculty',
}];

const offersById = {
  '0c266dff-15dd-4b49-8397-2bb16070ed52': [{
    id: 'C94271D8-B431-4A25-A3C5-A57737A1C909',
    title: 'Audio Conferencing'
  }, {
    id: '22355EB0-B6B6-484D-B856-29BE1F011300',
    title: 'Audio Conferencing (Nonprofit Staff Pricing)'
  }],

  'c52ea49f-fe5d-4e95-93ba-1de91d380f89': [{
    id: '648BF77B-1F0A-4911-8066-CAF37D67DC72',
    title: 'Azure Information Protection Premium P1',
  }],

  '0dab259f-bf13-4952-b7f8-7db8f131b28d': [{
    id: '0F598EFE-F330-4D79-B79F-C9480BB7CE3E',
    title: 'Domestic Calling Plan',
  }],

  'efccb6f7-5641-4e0e-bd10-b4976e1bf68e': [{
    id: '79C29AF7-3CD0-4A6F-B182-A81E31DEC84E',
    title: 'Enterprise Mobility + Security E3'
  }, {
    id: 'E6409072-4DC4-42E8-92C1-A24ABED5D524',
    title: 'Enterprise Mobility + Security E3 (Nonprofit Staff Pricing)'
  }],

  '05e9a617-0261-4cee-bb44-138d3ef5d965': [{
    id: '2B3B8D2D-10AA-4BE4-B5FD-7F2FEB0C3091',
    title: 'Microsoft 365 E3',
  }, {
    id: 'F7AD4EAF-F2EF-42DC-B43C-425CE393435C',
    title: 'Microsoft 365 E3 (Nonprofit Staff Pricing)'
  }],

  '06ebc4ee-1bb5-47dd-8120-11324bc54e06': [{
    id: '8BDBB60B-E526-43E9-92EF-AB760C8E0B72',
    title: 'Microsoft 365 E5'
  }, {
    id: '31BEDF01-9E57-4ECE-A53A-D3656A563931',
    title: 'Microsoft 365 E5 (Nonprofit Staff Pricing)'
  }],

  '314c4481-f395-4525-be8b-2ec4bb1e9d91': [{
    id: 'C60E9CC5-7339-479E-8003-285F6BD195C7',
    title: 'Office 365 A1 for students',
  }],

  'e578b273-6db4-4691-bba0-8d691f4da603': [{
    id: '7EB5101B-B893-4D63-92CA-72DF3C71FAFC',
    title: 'Office 365 A3 for faculty'
  }]
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