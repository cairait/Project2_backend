const {books, comments} = require("../models/books.js");

const index = async (req, res) => {
    try {

    const indexModel = {
        book: await books.find({}),
        comment: await comments.find({})
    }

    res.status(200).json(indexModel)

} catch (error){

    res.status(400).send(error)

}
}

const create = async (req, res) => {
        try{
const createModel = {
        book: await books.create(req.body),
        comment: await comments.create(req.body)
    }

    res.status(200).json(createModel)

} catch(error){

    res.status(400).send(error)
}
}

const update = async (req, res) => {
    try {
    const updateModel = {
        book: await books.findByIdAndUpdate(req.params.id, req.body),
        comment: await comments.findByIdAndUpdate(req.params.id, req.body)
    }

    res.status(200).json(updateModel)

} catch(error){

    res.status(400).send(error)
}
}

const destroy = async (req, res) => {
    try{
    const destroyModel = {
        book: await books.findByIdAndDelete(req.params.id),
        comment: await comments.findByIdAndDelete(req.params.id)
    }
    res.json(destroyModel)

} catch(error){

    res.status(400).send(error)
}
}

/*
//CREATE - add a new book
const create = async (req, res) => {
    try { 
        const newBook = await booksSchema.create(req.body);
        //adding book to body
        res.status(200).json(newBook) 
        //This returns the updated list to JSON data
    }
    catch(error) {
        res.status(400).send(error)
    }
}
​
// READ - all the books listed
const index = async (req, res) => {
    try {
        const allBooks = await booksSchema.find({})//.populate('comments'); 
        res.status(200).json(allBooks);
        //Returning JSON data
    } 
    catch(error) {
        res.status(400).send(error);
    }
}
​
//UPDATE - update book info
const update = async (req, res) => {
    try {
        const updateBooks = await booksSchema.findOneAndUpdate(req.params.id, req.body, {new: true});
        //Finds the books by ID
        //params will have that ID
​
        res.status(200).json(updateBooks)
    }
    catch(error){
        res.status(400).send(error)
    }
}
​
const destroy = async (req, res) => {
    try{
        const destroyBooks = await booksSchema.findByIdAndDelete(req.params.id)
        res.status(200).json(destroyBooks)
    } catch(error){
        res.status(400).send(error)
    }
}
*/
module.exports = {
    index,
    create,
    update,
    destroy
}