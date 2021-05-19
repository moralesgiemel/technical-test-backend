const ValueController = require("../controllers/value")
const express = require("express")
const router = express.Router()

//get all values
router.get('/', (req,res) => {
    ValueController.getValues(req.body).then(resultFromGetValues => res.send(resultFromGetValues))
})

//add a new value
router.post('/add', (req,res) => {
    ValueController.addValue(req.body).then(resultFromAddValue => res.send(resultFromAddValue))
})


//edit value
router.put('/edit', (req,res) => {
    ValueController.editValue(req.body).then(resultFromEditValue => res.send(resultFromEditValue))
})

//delete value
router.delete('/delete', (req,res) => {

    console.log(req.body)

    let id = req.body.id
    console.log(id)
    ValueController.deleteValue(id).then(resultFromDeleteValue => res.send(resultFromDeleteValue))
})



module.exports = router