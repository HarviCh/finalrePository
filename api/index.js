const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./routes/users')
const appointments  = require('./routes/appointments')
const auth  = require('./routes/auth')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/api/users', users)
app.use('/api/appointments', appointments)
app.use('/api/auth', auth)
module.exports= app