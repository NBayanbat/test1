const express = require("express");
const router = express.Router();
const BookController = require('../controller/BookController')
const BookValidator = require("../middleware/update")

router.get('/book', BookController.getBooks)
router.post('/createBook', BookValidator.updateBook(), BookController.createBook)
router.put('/updateBook/id/:id', BookValidator.updateBook(), BookController.updateBook)
router.delete('/deleteBook/:id', BookController.deleteBook)

module.exports = router