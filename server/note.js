class Note {
    id
    content
    important

    constructor(id, content, important = false) {
        this.id = id,
        this.content = content
        this.important = important
    }
}

export default Note