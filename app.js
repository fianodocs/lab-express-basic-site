const express = require("express")
const { execPath } = require("process")

const app = express()

app.use(express.static("public"))

app.get("/homee",(request, response, next) => {
    
    response.sendFile(__dirname + '/views/homee.html')
    console.log(__dirname)
})
app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})
app.get("/work", (request, response, next) => {
    response.sendFile(__dirname + '/views/work.html')
})
app.listen(3000, ()=> console.log("app listening on port") )