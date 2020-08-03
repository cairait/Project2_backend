const mongoose = require('mongoose')
​
const {Schema, model} = mongoose
​
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
​
​
//create the model for the Schema
const booksSchema = model('Books', booksSchema);
​

​
//export the Schema
module.exports = mongoose.model('Books', booksSchema)