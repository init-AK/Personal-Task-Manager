const http = require('http')
const app = require('./app')
const { connectDB } = require('./db/db')

const server = http.createServer(app)

function startServer() {
    const PORT = 5000

    connectDB()
    
    server.listen(PORT, () => {
        console.log(`Server Listening on PORT : ${PORT}`)
    })
}

startServer()
