

// app.use('/api', routes)

const express = require('express');
// the require takeing the express
const router = express.Router()
//create a router instance
const Model = require('../model/model');
// the require the model folder model file



//Post Method
router.post('/post', async (req, res) => {
    // the post  function is used to handle incoming HTTP POST requests.
    //This is the route handler function that will be executed when a POST request is made to the 
    const data = new Model({
        // create the new model
        name: req.body.name,
        // request to body take the name 
        age: req.body.age
        // request to  body take the age
    })

    try {
        // try means to wrap a section 
        const dataToSave = await data.save();
        //await data.save() means saving the data to the database
        res.status(200).json(dataToSave)
        // data done save the json file and display the status
    }
    catch (error) {
        res.status(400).json({message: error.message})
        // catch means  handle errors or exceptions
    }
})

//Get by ID Method
router.get('/getAll', async (req, res) => {
    // get means accessing or using that property or method. 
    // get all means getting the all documents
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    // get one id you put the id getting the id documents
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    // patch means updata the data
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
              //wait for a Promise to resolve 
            //findbyIdAndUpdate finds a document by its ID, applies an update to the document, and then returns the updated document.
        )

        res.send(result)
        // send means display the output
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})



//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    // delete id means delete the id documents
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})



module.exports = router;
// is a line of code in a Node.js module that defines the exported object.


