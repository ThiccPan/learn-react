let personList = [
    {
        id: 1,
        name: "person 1",
        age: 12,
        salary: 1000
    },
    {
        id: 2,
        name: "person 2",
        age: 14,
        salary: 1000
    }
]

function addPerson(personList, name, age = 18, salary = 1000) {
    return [
        ...personList,
        {
            id: personList[personList.length-1].id + 1,
            name: name,
            age: age,
            salary: salary
        }
    ]
}

function removePerson(personList, id, updateList) {
    const newList = personList
        .filter(person => {
            console.log("id = ", person.id)
            if (person.id !== id) {
                console.log("match", person)
                return person
            }
        })
    console.log(newList)
    updateList(newList)
    console.log(personList)
}

function editPerson(personList, id, updateList) {
    const newList = personList.map((person) => {
        console.log(person)
        if (person.id === id) {
            console.log("inside")
            person.salary += 1000
        }
        return person
    })

    console.log(newList)
    updateList(newList)
}

export { personList, addPerson, removePerson, editPerson }