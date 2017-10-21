const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/authors')

router.get('/', ctrl.getAllAuthors)
router.get('/:authorId', ctrl.getOneAuthor)
router.post('/', ctrl.createAuthor)
router.put('/:authorId', ctrl.updateAuthor)
router.delete('/:authorId', ctrl.destroyAuthor)

module.exports = router
