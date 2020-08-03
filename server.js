const express = require('express'); // brings in express library
const { response } = require('express');
const app = express() // creates application object



// CREATE OUR SERVER LISTENER
app.listen(3000, () => {
    console.log('Listening on Port 3000')
});


