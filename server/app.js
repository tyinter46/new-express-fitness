const express = require('express')
const cors = require("cors");
const helmet = require("helmet")
const studentController = require('./controllers/studentController')


const app = express()
app.use(express.json())
app.use(cors());
app.use(helmet());


app.use(studentController);
app.use('/', async (req, res)=>{
    res.send('welcome to the fitness app')
})



const port = process.env.PORT || 5000
app.listen(5000, ()=>{
    console.log(`the server has started on ${port}`)
})
