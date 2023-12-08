const express = require('express');
const Model = require('../model/employeemodel');
const router = express.Router()
module.exports = router;
// const Employeemodel = require('../model/employeemodel');


//Employee method
// router.post('/post', async (req, res) => {
//     const data = new EmployeeModel({
//         employeeName: req.body.employeeName, 
//         // age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })



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
