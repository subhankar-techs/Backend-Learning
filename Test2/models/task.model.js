const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    taskTitle: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    taskDescription: {
        type: String,
        minlength: 5,
        maxlength: 500
    },
    taskStatus: {
    type: String,
    required: true,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema, 'tasks');