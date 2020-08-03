const Books = require('../backend/Project2_backend/models.js/books.js');

//CREATE - add a new book
const create = async (req, res) => {
    try { 
        const newBook = await Books.create(req.body);
        //adding book to body
        res.status(200).json(createBooks) 
        //This returns the updated list to JSON data
    }
    catch(error) {
        res.status(400).send(error)
    }
}

// READ - all the books listed
const index = async (req, res) => {
    try {
        const allBooks = await Books.find({}).populate('comments'); 
        res.status(200).json(allBooks);
        //Returning JSON data
    } 
    catch(error) {
        res.status(400).send(error);
    }
}

//UPDATE - update book info
const update = async (req, res) => {
    try {
        const updateBooks = await Books.findOneAndUpdate(req.params.id, req.body, {new: true});
        //Finds the books by ID
        //params will have that ID

        res.status(200).json(updateBooks)
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports = {
    index,
    create,
    update
}