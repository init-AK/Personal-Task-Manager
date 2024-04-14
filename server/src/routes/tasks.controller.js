const { createNewTask, getAllTasks, updateTask, deleteTask } = require('../models/task.model')

async function httpGetAllTasks(req, res) {

    try {
        const tasks = await getAllTasks()
        return res.status(200).json(tasks)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

}

async function httpAddNewTask(req, res) {
    try {
        const body = req.body
        const task = await createNewTask(body)
        return res.status(201).json(task)
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

async function httpUpdateTask(req, res) {
    const taskId = req.params.id
    const updatedData = req.body

    try {
        const updatedTask = await updateTask(taskId, updatedData)
        if (!updatedTask) {
            return res.status(404).json({
                message: 'Task Not Found'
            })
        }
        res.json(updatedTask)
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

async function httpDeleteTask(req,res) {
    const taskId = req.params.id
    try {
        const result = await deleteTask(taskId)
        console.log(result.deletedCount === 1 ? 'Task deleted' : 'Failed deleting task.')

        if(result.deletedCount !== 1) {
          return res.status(404).json({  
                message:'Task Not Found'
            })
        } 
        res.json({
            message: 'Deleted Task Successfully'
        })

    } catch(err) {
       return res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    httpGetAllTasks,
    httpAddNewTask,
    httpUpdateTask,
    httpDeleteTask
}