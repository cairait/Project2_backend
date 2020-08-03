const express = require('express');
const BooksRouter = express.Router();
const { index, create, update } = require('../backend/Project2_backend/controllers.js/books.js')

//CREATE
BooksRouter.post('/', create);

//READ
BooksRouter.get('/', index);

//UPDATE 
BooksRouter.put('/:bookid', update);

module.exports = BooksRouter;