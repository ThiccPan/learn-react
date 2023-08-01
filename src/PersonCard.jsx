const PersonCard = ({person, setPerson}) => {
    console.log(person)
    const greetingMsg = () => `hello ${person.name}`
    const updateSalary = () => setPerson({
        ...person,
        salary: person.salary + 1000,
    })
    return (
        <div>
            <p>Name: <span>{person.name}</span></p>
            <p>Age: {person.age}</p>
            <p>Salary: {person.salary}</p>
            <p>{greetingMsg()}</p>
            
            <button onClick={updateSalary}>+1k to salary</button>
        </div>
    )
}

export default PersonCard