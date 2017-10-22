const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/books')

router.get('/', ctrl.getAllBooks)
router.get('/:bookId', ctrl.getOneBook)
router.post('/', ctrl.createBook)
router.put('/:bookId', ctrl.updateBook)
router.delete('/:bookId', ctrl.destroyBook)

router.get('/:bookId/authors', ctrl.getBookAuthors)


module.exports = router
