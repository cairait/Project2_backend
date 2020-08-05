const express = require('express');
const BooksRouter = express.Router();

//this is causing a problem
const {index, create, update, destroy} = require("../controllers/books.js")
//READ
BooksRouter.get('/', index);

//CREATE
BooksRouter.post('/newbook', create);

//UPDATE 
BooksRouter.put('/:id', update);

//DELETE
BooksRouter.delete('/:id', destroy);

module.exports = BooksRouter;
