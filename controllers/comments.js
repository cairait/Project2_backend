// const Comment = require('../backend/Project2_backend/models.js/comments.js');
// const Book = require('../models.js/books.js');
const mongoose = require('mongoose');
const objectify = mongoose.Types.ObjectId;

//CREATE - create a new comment
const create = async (req, res) => {
    try {
        //waits for the user to submit their comment & adds to body
        req.body.bookid = objectify(req.body.bookid);
        const newComment = await Comment.create(req.body);
        console.log(newComment)
        console.count()

        //Push new comment
        let bookOnPage = await Book.findOne({_id: req.body.bookid}).populate('comments'); 
        console.log(bookOnPage)
        console.count()

        await bookOnPage.comments.push(newComment._id);
        console.log(bookOnPage)
        console.count()

        //This saves the comment to that provider
        await bookOnPage.save();
        // console.log(newComment)
        console.count()

        res.status(200).json(newComment) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

//READ - showing every comment for the books
const index = async (req, res) => {
    try {
        const everyComment = await Comment.find({}).populate('providerid')
        res.status(200).json(everyComment)
    }
    catch(error) {
    }
}

//DESTROY COMMENTS
const destroy = async (req, res) => {
    try {
        const deleteComment = await Comment.findByIdAndDelete(req.params.commentid);
        //finds the comment by ID and deletes it then returns the ID of the deleted one
        res.status(200).json(deleteComment);
    }
    catch(error) {
        res.status(400).send(error)
    } 
}

module.exports = {
    index,
    create,
    destroy
}