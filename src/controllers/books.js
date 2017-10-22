const model = require('../models/book')

function getAllBooks(req, res, next) {
  const data = model.getAllBooks()
  res.status(200).json({ data })
}

function getBookAuthors(req, res, next) {
  const bookId = req.params.bookId
  const data = model.getBookAuthors(bookId)
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

function createAuthor(req, res, next) {
  const bookId = req.params.bookId
  const body = req.body
  const data = model.createAuthor(body, bookId)
  res.status(201).json({ data })
}

function updateBook(req, res, next) {
  const bookId = req.params.bookId
  const body = req.body
  const data = model.updateBook(bookId, body)
  res.status(200).json({ data })
}

function updateAuthor(req, res, next) {
  const bookId = req.params.bookId
  const authorId = req.params.authorId
  const body = req.body
  const data = model.updateAuthor(bookId, authorId, body)
  res.status(200).json({ data })
}

function destroyBook(req, res, next) {
  const bookId = req.params.bookId
  const data = model.destroyBook(bookId)
  res.status(200).json({ data })
}

function destroyAuthor(req, res, next) {
  const bookId = req.params.bookId
  const authorId = req.params.authorId
  const data = model.destroyAuthor(bookId, authorId)
  res.status(200).json({ data })
}

module.exports = { getAllBooks, getOneBook, createBook, updateBook, destroyBook, getBookAuthors, createAuthor, updateAuthor, destroyAuthor }
