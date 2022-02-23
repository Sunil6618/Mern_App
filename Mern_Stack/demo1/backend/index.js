const express = require('express')
const app = express()
const port = 3000;

const Mongo  = require("mongoose");
const userModel = require('./Model/userModel');
const userRouter = require('./Router/UserRouter');
Mongo.connect("mongodb://127.0.0.1:27017/Demo").then(()=>console.log("COnnection....."));
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/User',userRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))