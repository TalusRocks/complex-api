const uuid = require('uuid/v4')
const books = require('../../data/books')

function getAllBooks() {
  return books
}

function getOneBook(bookId) {
  return books.find( book => book.id === bookId)
}

function createBook(body) {
  console.log("yoyoyo");
  const id = uuid()
  const name = body.name
  const borrowed = body.borrowed
  const description = body.description
  const authors = body.authors

  const book = { id, name, borrowed, description, authors }
  books.push(book)

  return book
}

function updateBook(bookId, body) {
console.log("hihihi");
  const book = books.find( book => book.id === bookId)

  book.name = body.name
  book.borrowed = body.borrowed
  book.description = body.description
  book.authors = body.authors

  return book
}

function destroyBook() {}

module.exports = { getAllBooks, getOneBook, createBook, updateBook, destroyBook }
