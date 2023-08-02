const Course = ({ course }) => {
    console.log(course)
    let sum = 0;
    return (
        <>
            <h2>Course name: {course.name}</h2>
            {course.parts.map(
                (part) => (
                    <p key={part.id}>
                        {part.name}: {part.exercises}
                    </p>
                )
            )}

            <p>Total: {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
        </>
    )
}

export default Course