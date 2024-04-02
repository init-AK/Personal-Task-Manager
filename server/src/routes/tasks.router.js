const express = require('express')
const { httpGetAllTasks, httpUpdateTask, httpAddNewTask, httpDeleteTask } = require('./tasks.controller')

const tasksRouter = express.Router()

tasksRouter.get('/', httpGetAllTasks)
tasksRouter.post('/addTask', httpAddNewTask)
tasksRouter.put('/:id', httpUpdateTask)
tasksRouter.delete('/:id',httpDeleteTask)


module.exports = {
    tasksRouter
}