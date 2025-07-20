const crudModel = require('../models/task.model');

const getAll = async (req,res)=>{
 try{
    const allData = await crudModel.find({});
    if(!allData){
        return res.status(404).json({message:"No data found"});
    }else{
        res.status(200).json(allData);
    }
 }catch(err){
    res.status(500).json({message:err.message});    
 }
};

const createTask= async (req,res)=>{
    try{
        const newData = await crudModel.create({
            taskTitle: req.body.taskTitle,
            taskDescription: req.body.taskDescription,
            taskStatus: req.body.taskStatus
        });
        if(!newData){
            return res.status(403).json({message:"Data not created"});
        }else{
            res.status(200).json({"message":"Data created successfully"});
        }
    }catch(err){
        res.status(403).json({message:err.message});
    }
};

const updateTask= async (req,res)=>{
    try{
        
        if(req.body.status && req.body.status !== "pending" && req.body.status !== "in-progress" && req.body.status !== "completed"){
            return res.status(403).json({message:"Invalid status"});
        } 
         else {
            let dt = new Date();
            const updatedData = await crudModel.updateOne({_id:req.params.id},
            {$set:{taskTitle:req.body.taskTitle,taskDescription:req.body.taskDescription,taskStatus:req.body.taskStatus}});
            if(!updatedData){
                return res.status(404).json({message:"unable to update data"});
            }else{
                res.status(200).json({"message":"Data updated successfully"});
            }   
           
        }
        
         
    }catch(err){
        res.status(403).json({message:err.message});
    }                                 
};

const removeTask= async (req,res)=>{
    try{
        const deletedData = await crudModel.deleteOne({_id:req.params.id});
        if(!deletedData){
            return res.status(404).json({message:"Data not found"});
        }else{
            res.status(200).json({"message":"Data deleted successfully"});
        }
    }catch(err){
        res.status(403).json({message:err.message});
    }                                 
};
const getById= async (req,res)=>{
    try{
        const data = await crudModel.find({_id:req.params.id});
        if(!data){
            return res.status(404).json({message:"Data not found"});
        }else{
            res.status(200).json(data);
        }
    }catch(err){
        res.status(403).json({message:err.message});
    }                                 
};

module.exports = {
    getAll,
    createTask, 
    updateTask,
    removeTask, 
    getById
};
console.log("CRUD controller created successfully");   