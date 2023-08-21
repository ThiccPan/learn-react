import fs from "fs";
import express from "express";
import Note from "./note.js"

const PORT = 8080

const sample = fs.readFileSync("db.json")
let data = JSON.parse(sample)
console.log(data)

const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send(`pog online poggers`)
})

app.get('/notes', (req, res) => {
    res.send(data)
})

app.post('/notes', (req, res) => {
    let reqData = req.body
    if (reqData.content == null) {
        res.sendStatus(400)
        return
    }

    let lastId = data.notes.at(data.notes.length - 1).id + 1
    let newNote = new Note(lastId, reqData.content, reqData.important)

    data.notes.push({ ...newNote })
    console.log(data)

    fs.writeFileSync("db.json", JSON.stringify(data))
    res
        .status(200)
        .json(
            {
                "message": "success adding new note",
                "data": { ...newNote }
            }
        )
})

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const resData = data.notes.find((note) => note.id === id)

    if (resData === undefined) {
        res.status(404).send()
        return
    }

    res.json(resData)
})

app.put('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    let reqBody = req.body
    // find index
    const resIdx = data.notes.findIndex((note) => note.id == id)
    if (resIdx === -1) {
        res.status(404).send()
        return
    }

    let updated = data.notes.at(resIdx)

    if (reqBody.content != undefined) {
        updated.content = reqBody.content
    }

    if (reqBody.important != undefined) {
        updated.important = reqBody.important
    }

    data.notes[resIdx] = updated
    fs.writeFileSync("db.json", JSON.stringify(data))

    res.send(data.notes[resIdx])
})

app.listen(PORT, () => {
    console.log(`app started at ${PORT}`)
})
