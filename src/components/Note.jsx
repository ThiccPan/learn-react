const Note = (
    { note:
        {
            id,
            content,
            important
        }
    }) => {
    return (
        <div>
            <p>content: {content}</p>
        </div>
    )
}

export default Note