const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskId: {
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    createdAt:{
        type: Date,
        default:() => Date.now()
    },
    completed:{
        type:Boolean,
        default:false
    }
}, { timestamps : true})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task