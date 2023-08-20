import fs from "fs";
import express from "express";

const PORT = 8080

const sample = fs.readFileSync("db.json")
let data = JSON.parse(sample).notes
console.log(data)

const app = express()
app.get('/', (req, res) => {
    res.send(`pog online poggers`)
})

app.get('/notes', (req, res) => {
    res.send(data)
})

app.post('/notes', (req, res) => {
    console.log(req.body)
    res.send()
})

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const resData = data.find((note) => note.id === id)
    if (resData === undefined) {
        res.status(404).send()
        return
    }
    res.json(resData)
})

app.listen(PORT, () => {
    console.log(`app started at ${PORT}`)
})
