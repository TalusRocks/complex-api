const model = require('../models/author')

function getAllAuthors(req, res, next) {
  const data = model.getAllAuthors()
  res.status(200).json({ data })
}



module.exports = getAllAuthors
