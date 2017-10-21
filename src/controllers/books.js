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
  console.log(req.body);
  const body = req.body
  const data = model.createBook(body)
  res.status(201).json({ data })
}

function updateBook(req, res, next) {
  const bookId = req.params.bookId
  const body = req.body
  const data = model.createBook(bookId, body)
  res.status(200).json({ data })
}

function destroyBook(req, res, next) {}

module.exports = { getAllBooks, getOneBook, createBook, updateBook, destroyBook }
