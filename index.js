
require('dotenv').config();
// require means return the url and spilt  file data
//upload the file date

const express = require('express');
//expree means framework that provides a robust set of features
const mongoose = require('mongoose');
//beased on the mongodb libarary 
const mongoString = process.env.DATABASE_URL;
//mongostring contains the connection string to the database, which is provided by the "DATABASE_URL" environment variable.
// DATABASE CONNECT
mongoose.connect(mongoString);
//Mongoose to connect to the MongoDB database using the provided connection string (mongoString).
// close the connection to the database mongoose.connection.close()
const database = mongoose.connection;
//mongoose connect to the database
database.on('error', (error) => {
    console.log(error)
})
//listening for an 'error' event on the MongoDB connection.

database.once('connected', () => {
    console.log('Database Connected');
})
//This means that when the 'connected' event is emitted, the event listener will execute its callback function, and then automatically remove itself from the list of listeners.
// END CONNECTION



const app = express();
//app is the variable 
// takeing the express
app.use(express.json());
// that adds middleware functions to the application's request-response cycle.
app.listen(3700, () => {
    console.log(`Server Started at ${3700}`)
})

//applications to start a web server and begin listening for incoming HTTP requests. 
const routes = require('./routes/routes');
const routes2 = require('./routes/routes2');
// routes is the varible 
// require means take the url with a file
app.use('/api', routes)
app.use('/api2', routes2)



