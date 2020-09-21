const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bodyPaser = require('body-parser')
require('dotenv').config()
const requestPromotionRoute = require('./Routes/RequestPromotionRoute') 
const applyToPromotionRoute = require('./Routes/ApplyToPromotionRoute') 
const port = process.env.PORT || 3009;


app.use(cors())
app.use(bodyPaser.json())
app.use('/request',requestPromotionRoute)
app.use('/apply',applyToPromotionRoute)

app.listen(port, console.log("\x1b[33m", `\tExpress is running on Port ${port}... `))

mongoose.connect(
    process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true   
    }, 
    () => console.log("\x1b[35m","\t  & Database is connected...","\x1b[36m") 
);