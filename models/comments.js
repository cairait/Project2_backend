const mongoose = require('mongoose')

const {Schema, model} = mongoose

//document structure for comments
const commentsSchema = new Schema ({
    commenterName: {type: String}, 
    comment: {type: String, required:true},
    rating: {type: Number},
    bookid: {
        type: Schema.Types.ObjectId,
        ref: "Books"
    }
})

//create the model for the Schema
const comment = model('Comments', commentsSchema);


//export the Schema
module.exports = comment