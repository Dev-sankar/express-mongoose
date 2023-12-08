const mongoose = require('mongoose');
//beased on the mongodb libarary 

const dataSchema = new mongoose.Schema({
    //define the structure of the data
    // define the schema structure
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)
// is a line of code in a Node.js module that defines the exported object


