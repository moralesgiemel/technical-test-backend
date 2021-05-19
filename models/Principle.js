const mongoose = require('mongoose')

const principleSchema = new mongoose.Schema({

    label: {
        type: String,
        required: [true, "Label is required"]
    },

    text: {
        type: String,
        required: [true, "Text is required"]
    }


})

module.exports = mongoose.model('principle', principleSchema)