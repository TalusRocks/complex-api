const uuid = require('uuid/v4')
const fs = require('fs')
const authors = JSON.parse(fs.readFileSync('./db/authors.json', 'utf-8'))
const books = JSON.parse(fs.readFileSync('./db/books.json', 'utf-8'))

function getAllAuthors() {
  return authors
}

module.exports = getAllAuthors
