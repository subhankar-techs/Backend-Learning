const express = require('express');
const cors    = require('cors');
const env     = require('dotenv').config();
const db= require('./db'); 
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const app = express();

app.use(cors()); 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const crudModel = require('./models/task.model');

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to CRUD API</h1>")
});

const taskRouter = require("./routes/task.route");
app.use("/task",taskRouter);
app.listen(PORT,HOST,()=>{
    console.log(`Express server has started at http://${HOST}:${PORT}/`);
});