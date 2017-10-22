const model = require('../models/book')

function getAllBooks(req, res, next) {
  const data = model.getAllBooks()
  res.status(200).json({ data })
}

function getOneBook(req, res, next) {
  const bookId = req.params.bookId
  const data = model.getOneBook(bookId)
  res.status(200).json({ data })
}

function createBook(req, res, next) {
  const body = req.body
  const data = model.createBook(body)
  res.status(201).json({ data })
}

function updateBook(req, res, next) {
  const bookId = req.params.bookId
  const body = req.body
  const data = model.updateBook(bookId, body)
  res.status(200).json({ data })
}

function destroyBook(req, res, next) {
  const bookId = req.params.bookId
  const data = model.destroyBook(bookId)
  res.status(200).json({ data })
}

module.exports = { getAllBooks, getOneBook, createBook, updateBook, destroyBook }
