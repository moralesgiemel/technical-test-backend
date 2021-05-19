const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const connection = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'))
mongoose.connect(`${connection}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const valueRoutes = require('./routes/value')
const principleRoutes = require('./routes/principle')

app.use('/api/values', valueRoutes)
app.use('/api/principles', principleRoutes)

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${process.env.PORT || 4000}`)
})
