const mongoose = require('mongoose')

const valueSchema = new mongoose.Schema({

    label: {
        type: String,
        required: [true, "Label is required"]
    },

    text: {
        type: String,
        required: [true, "Text is required"]
    }


})

module.exports = mongoose.model('value', valueSchema)