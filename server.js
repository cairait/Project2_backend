require("dotenv").config(); //reads .env file environmental variables
const express = require("express"); //Brings in Express Library
const app = express(); //creates express application object
const morgan = require("morgan"); //Brings in Morgan Library
const cors = require("cors"); //Brings in CORS library
const mongoose = require("mongoose"); //bring in mongoose library

//this is causing a problem
const BooksRouter = require("./routes/books.js"); // VARIABLE IN USE ON LINE 90
const CommentsRouter = require("./routes/comments.js");

//const booksSchema = require("/models/books.js")
//const Comments = require("../backend/Project2_backend/models.js/comments.js")

//ROUTERS
// const BooksRouter = require("../backend/Project2_backend/routes/books.js")
// const CommentsRouter = require("../backend/Project2_backend/routes/comments.js")

//.env file 

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

//concatenation adds mongoDB
const mongoURI = process.env.mongoURI
//////////////////////
//GlOBAL VARIABLES
/////////////////////
// Variables with global scope
// const PORT = process.env.PORT; //port number for server as defined in environment variables
// const NODE_ENV = process.env.NODE_ENV; //"development" or "production"
// const mongoURI = process.env.mongoURI + "gifs"; //URI for connecting to database specified in .env
//the mongoose connection object
//console.log(db)
const mongoConfigObject = { useNewUrlParser: true, useUnifiedTopology: true }; //Config option to eliminate deprecation warnings

///////////////////////////
//CONNECT TO DATABASE
///////////////////////////
// Code for connecting to our mongo database
mongoose.connect(mongoURI, mongoConfigObject, () => {
    console.log("CONNECTED TO MONGO");
  });
  const db = mongoose.connection;

  ////////////////////////////
//CONNECTION MESSAGING
///////////////////////////
//Building in messages so we know when our database connection changes
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected!"));
db.on("disconnected", () => console.log("mongo disconnected"));

/////////////////////
// CORS SECURITY CONFIGURATIONS
/////////////////////
// CREATE A WHITELIST OF WHICH WEBSITES CAN MAKE API CALLS TO YOUR SERVER
const whitelist = ["http://localhost:3000/", "http://example2.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not allowed by CORS, domain needs to be added to whitelist")
      );
    }
  },
};

////////////////////
// MIDDLEWARE
////////////////////
//UTILITY FUNCTIONS THAT RUN BEFORE YOUR ROUTES
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions)); //ternary operator
// Enables websites in whitelist to make API calls to your server, enables all sites in development
app.use(express.json()); //Turns JSON from post/put/patch requests and converts them into req.body object
app.use(morgan("dev")); // Enables Morgan logging, creating more useful terminal logs while server runs
app.use(express.static("public")); //Allows static serving of files from public folder
app.use(cors())

////////////////////
// ROUTES AND ROUTERS
////////////////////
//These handle sending responses to server requests for spefic endpoints

// app.use("/books", BooksRouter) 
// app.use("/comments", CommentsRouter)

app.use('/books', BooksRouter)
app.use('/comments', CommentsRouter)

///////////////////////////
//ROOT ROUTE (FOR TESTING)
///////////////////////////
app.get("/", (req, res) => {
  res.send("If you see this then the server is working!");
});

////////////////////
// Server Listener
////////////////////
//Gets this server running
app.listen(PORT, () => {
  console.log(`Listening on port 3000`);
});

module.exports = mongoose