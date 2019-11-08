module.exports = {
  get,
};

async function get(req, res) {
  return res.send({ message: 'hi Tom'});
}