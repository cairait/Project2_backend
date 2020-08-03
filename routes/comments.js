const express = require('express');
const CommentsRouter = express.Router();
const { index, create, destroy } = require('../backend/Project2_backend/controllers.js/comments.js')


//CREATE - create a new comment
CommentsRouter.post('/', create);

//READ - show all comments
CommentsRouter.get('/', index);

//DELETE - delete comment
CommentsRouter.delete('/:commentid', destroy);

module.exports = CommentsRouter;