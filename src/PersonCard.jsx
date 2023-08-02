const PersonCard = ({person, setPerson, removeHandler}) => {
    console.log(person)
    const updateSalary = () => setPerson({
        ...person,
        salary: person.salary + 1000,
    })
    return (
        <div>
            <p>Name: <span>{person.name}</span></p>
            <p>Age: {person.age}</p>
            <p>Salary: {person.salary}</p>
            <button onClick={removeHandler}>remove person</button>
            
            <button onClick={updateSalary}>+1k to salary</button>
        </div>
    )
}

export default PersonCard