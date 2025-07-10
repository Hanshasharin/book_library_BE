const express = require('express')
const { bookListController, newBookController, ratingController, deleteBookController, bookDetailController } = require('../controllers/bookController')
const router = express.Router()

router.get('/books',bookListController)
router.get('/books/:id', bookDetailController)
router.post('/create', newBookController)
router.put('/rating',ratingController)
router.delete('/delete',deleteBookController)
module.exports = router