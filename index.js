const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let fileName = +new Date()
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.writeFile(`date-time.txt/${fileName}.txt`,
    `Time is - ${new Date()}`,'utf-8',()=>{
        fs.readFile(`date-time.txt/${fileName}.txt`,'utf-8',(error,data)=>{
            if(error)
                console.log(error)
            else
                res.end(data)
        })
    })
})

server.listen(8001,()=>console.log("Server is listening port 8001"))