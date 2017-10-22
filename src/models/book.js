const uuid = require('uuid/v4')
const fs = require('fs')
const books = JSON.parse(fs.readFileSync('./db/books.json', 'utf-8'))

function getAllBooks() {
  return books
}

function getOneBook(bookId) {
  const book = books.find( book => book.id === bookId)

  let response
  if(!book){
    response = {errors: {message: "could not find that book"}}
  } else {
    response = book
  }
  return response
}

function createBook(body) {
  const name = body.name
  const borrowed = body.borrowed
  const description = body.description
  const authors = body.authors
  const id = uuid()

  let response
  if (!name || borrowed === undefined || !authors) {
    response = {errors: {message: "please provide name, borrow status, and author(s) to create a new book"}}
  } else {
    const book = { id, name, borrowed, description, authors }
    books.push(book)

    const result = JSON.stringify(books)
    fs.writeFileSync('./db/books.json', result)

    response = book
  }
  return response
}

function updateBook(bookId, body) {
  const book = books.find(function(book){
    return book.id === bookId
  })

  let response
  if(!book){
    response = {errors: {message: "could not find that book"}}
  } else if (!body.name || body.borrowed === undefined || !body.authors) {
    response = {errors: {message: "please provide name, borrow status, and author(s) to update a book"}}
  } else {
    book.name = body.name
    book.borrowed = body.borrowed
    book.description = body.description
    book.authors = body.authors

    const result = JSON.stringify(books)
    fs.writeFileSync('./db/books.json', result)

    response = book
  }
  return response
}

function destroyBook(bookId) {
  const book = books.find(function(book){
    return book.id === bookId
  })

  let response
  if (!book) {
    response = {errors: {message: "could not find that book"}}
  } else {
    const index = books.indexOf(book)
    const deletedBook = books.splice(index, 1)
    const result = JSON.stringify(books)
    fs.writeFileSync('./db/books.json', result)
    response = deletedBook
  }
  return response
}

module.exports = { getAllBooks, getOneBook, createBook, updateBook, destroyBook }
