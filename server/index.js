import http from 'http'
import fs from "fs";

const PORT = 8080

const sample = fs.readFileSync("db.json")
let data = JSON.parse(sample)
console.log(data)

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end(sample)
})

app.listen(PORT)
console.log(`app started at ${PORT}`)

