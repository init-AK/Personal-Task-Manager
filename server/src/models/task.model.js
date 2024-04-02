const Task = require('./task.mongo')

const DEFAULT_TASK_ID = 100 //TO TRACK ID's 

// const demoTask = {
//     title:'Finish TM Project',
//     description: 'Need to finish the project by end of the day.',
//     createdAt: () => Date.now(),
//     completed:false
// }

//TODO:CREATE A NEW TASK 
async function createNewTask(task) {

    const newTaskId = await getLatestTaskId() + 1

    const newTask = Object.assign(task, {
        taskId:newTaskId
    })

    try {
        return await Task.create(newTask)
    } catch(err) {
        throw new Error('Error Creating Task')
    }
}

//TODO:READ ALL TASKS
async function getAllTasks() {
    try{
        return await Task.find({},{'_id':0,'__v':0})
    } catch(err) {
        throw new Error('Error Fetching Tasks')
    }
}

//TODO:UPDATE TASK BY ID
async function updateTask(taskId,updatedData) {
    try {
        return await Task.findOneAndUpdate({taskId:taskId}, updatedData,{new:true})

    } catch(err) {
        throw new Error('Error Updating Task')
    }
}

//TODO: DELETE TASK BY ID
async function deleteTask(taskId) {
    try {
        return await Task.deleteOne({taskId : taskId})
    } catch(err) {
        throw new Error('Error Deleting Task')
    }
}

//TODO:GENERATE LATEST TASK ID
async function getLatestTaskId() {
    const latestTask = await Task.findOne().sort('-taskId')
    
    if(!latestTask) {
        return DEFAULT_TASK_ID
    } 

    return latestTask.taskId

}


module.exports = {
    createNewTask,
    getAllTasks,
    updateTask,
    deleteTask
}