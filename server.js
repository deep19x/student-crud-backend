require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/db.js');
const StudentRouter = require('./routes/studentRoute.js')

connectDB();

app.use(express.json());   //parse json data to express


app.use('/student',StudentRouter);


app.get("/",(req,res)=>{
    res.send("Hello World!");
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`App is listening to port ${port}!`);
});