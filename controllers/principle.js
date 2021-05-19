const Principle = require("../models/Principle")

module.exports.getPrinciples = () => {
    return Principle.find({}).then(resultFromFind =>{
        return resultFromFind
    })
}

module.exports.addPrinciple = (principle) => {
    let newPrinciple = new Principle({
        label: principle.label,
        text: principle.text
    })

    return newPrinciple.save().then((principle,err) => {
        return (err) ? false : true
    })
}

module.exports.editPrinciple = (principle) => {
    
    console.log(principle)
    
    return Principle.findByIdAndUpdate(principle._id).then(resultFromFindByIdAndUpdate => {
        resultFromFindByIdAndUpdate.label = principle.label;
        resultFromFindByIdAndUpdate.text = principle.text;

        return resultFromFindByIdAndUpdate.save().then((resultFromSaveChanges, err)=> { return (err) ? false : true })
    })
}

module.exports.deletePrinciple = (id) => {
        
    // console.log(id)
    return Principle.findByIdAndDelete(id, function(err, docs){
        // if(err){
        //     console.log(err)
        //     return false
        // }
        // else{
        //     return true
        // }
        // return (err) ? false : true
        if(!err){
            console.log("Deleted: "+ docs)
            
        } else {
            console.log(err)
          
        }
    })

    
}


