const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/books')

router.get('/', ctrl.getAllBooks)
router.get('/:bookId', ctrl.getOneBook)
router.post('/', ctrl.createBook)
router.put('/:bookId', ctrl.updateBook)
router.delete('/:bookId', ctrl.destroyBook)

router.get('/:bookId/authors', ctrl.getBookAuthors)
router.post('/:bookId/', ctrl.createAuthor)
router.put('/:bookId/:authorId', ctrl.updateAuthor)
router.delete('/:bookId/:authorId', ctrl.destroyAuthor)


module.exports = router
