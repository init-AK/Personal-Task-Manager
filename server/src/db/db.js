const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://akshath1015:HmZFhRsT6dtMybA3@democluster.mbabkkk.mongodb.net/taskManagement?retryWrites=true&w=majority&appName=DemoCluster'

async function connectDB() {
    
    await mongoose.connect(MONGO_URL)
}

mongoose.connection.once('open', () => {
    console.log('Successfully connected to Mongo DB')
})

mongoose.connection.on('error', () => {
    console.log('Could not connect to DB')
})

module.exports = {
    connectDB
}