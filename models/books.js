const mongoose = require('mongoose')

const {Schema, model} = mongoose

//document structure for books
const booksSchema = new Schema ({
    name: {type: String, required: true}, 
    description: {type: String, required: true},
    bookType: {type: String},
    imageURL: {type: String},
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }]
})

//document structure for comments
const commentsSchema = new Schema ({
    commenterName: {type: String}, 
    comment: {type: String, required:true},
    rating: {type: Number}
    // bookid: {
    //      type: Schema.Types.ObjectId,
    //      ref: "Books"
    //  }
})

//create the model for the Schema
const comments = model('Comments', commentsSchema);


//create the model for the Schema
const books = model('Books', booksSchema);



//export the Schema
module.exports = {books, comments}