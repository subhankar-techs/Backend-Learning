const express = require('express');
const cors    = require('cors');
const env     = require('dotenv').config();


const db = require("./db");
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const app = express();

app.use(cors()); // to make the server cors free.
//enable POST Request
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to taskAPI</h1>");
});

//consuming the taskModel
const taskModel = require("./models/task.model");
//adding a new task
app.post("/tasks/add",async(req,res)=>{
    try{
       let obj=  await taskModel.create({
               "task_title": req.body.ttitle,
               "task_desc" : req.body.tdesc
         });
         if(!obj){
            res.status(403).json({"message":"error adding task"});
         }else{
            res.status(200).json({"message":"task added successfully"});
         }
        }
        catch(error){
            console.log(error);
        }

});

app.get("/tasks/all",async(req,res)=>{
    try{
    let tasks= await  taskModel.find({}).exec();
    if(!tasks){
          console.log("empty collection");
    }    else{
        res.status(200).json(tasks);
    }
}
    catch(error){
        console.log(error);
    }
})


app.get("/tasks/show/:taskid",async(req,res)=>{
    try{    
    let task = await taskModel.findOne({"_id":req.params.taskid});
    if(!task){
         res.status(403).json({"message":"no such task found"});
    }else{
         res.status(200).json(task);
    }  
}
    catch(error){
         console.log(error);
    }    
});
app.listen(PORT,HOST,()=>{
    console.log(`Express server has started at http://${HOST}:${PORT}/`);
})