const Value = require("../models/Value")

module.exports.getValues = () => {
    return Value.find({}).then(resultFromFind =>{
        return resultFromFind
    })
}

module.exports.addValue = (value) => {
    let newValue = new Value({
        label: value.label,
        text: value.text
    })

    return newValue.save().then((value,err) => {
        return (err) ? false : true
    })
}

module.exports.editValue = (value) => {
    
    console.log(value)
    
    return Value.findByIdAndUpdate(value._id).then(resultFromFindByIdAndUpdate => {
        resultFromFindByIdAndUpdate.label = value.label;
        resultFromFindByIdAndUpdate.text = value.text;

        return resultFromFindByIdAndUpdate.save().then((resultFromSaveChanges, err)=> { return (err) ? false : true })
    })
}

module.exports.deleteValue = (id) => {
        
    // console.log(id)
    return Value.findByIdAndDelete(id, function(err, docs){
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

