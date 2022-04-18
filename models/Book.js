const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name:{
        type: String,
    },
    code:{
        type: String
    },
    price:{
        type: Number
    },
    authors:{
        type: String,
    },
    isbn:{
        type: Number,
        length: 10,
    },
    published_date:{
        type: Date,
    },
    publisher:{
        type: String
    }
})

const Book = mongoose.model('books', BookSchema)

module.exports = Book