const express = require('express');
const taskRouter = express.Router();

const taskController = require('../controllers/task.controllers');
taskRouter.get("/all", taskController.getAll);
taskRouter.post("/add", taskController.createTask);
taskRouter.put("/update/:id", taskController.updateTask);
taskRouter.delete("/delete/:id", taskController.removeTask);
taskRouter.get("/:id", taskController.getById);

module.exports = taskRouter;
console.log("Task routes created successfully");