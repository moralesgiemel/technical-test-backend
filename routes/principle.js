const PrincipleController = require("../controllers/principle")
const express = require("express")
const router = express.Router()

//get all principles
router.get('/', (req,res) => {
    PrincipleController.getPrinciples(req.body).then(resultFromGetPrinciples => res.send(resultFromGetPrinciples))
})

//add a new principle
router.post('/add', (req,res) => {
    PrincipleController.addPrinciple(req.body).then(resultFromAddPrinciple => res.send(resultFromAddPrinciple))
})


//edit principle
router.put('/edit', (req,res) => {
    PrincipleController.editPrinciple(req.body).then(resultFromEditPrinciple => res.send(resultFromEditPrinciple))
})

//delete principle
router.delete('/delete', (req,res) => {

    console.log(req.body)

    let id = req.body.id
    console.log(id)
    PrincipleController.deletePrinciple(id).then(resultFromDeletePrinciple => res.send(resultFromDeletePrinciple))
})



module.exports = router