import axios from "axios";
import backendUrl from "./constant";

export class contact {
    id = 0
    name = '';
    number = '';
    constructor(id, name, number) {
        this.id = id;
        this.name = name;
        this.number = number;
    }
}

export function addContact(phonebookList, uid, newContact) {
    // check if unique or not
    let isFound = phonebookList
        .findIndex((pb) =>
            pb.name == newContact.name
            || pb.number == newContact.number)

    if (isFound > -1) {
        console.log("not unique")
        editContact(phonebookList, isFound, newContact)
        return phonebookList;
    }

    newContact.id = uid
    uid++;

    axios.post(backendUrl, newContact)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))

    return [...phonebookList, newContact]
}

export function deleteContact(phonebookList, id) {
    let isFound = false;
    const updatedList = phonebookList.filter((contact) => {
        if (contact.id !== id) {
            return contact
        }

        axios.delete(`${backendUrl}/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        isFound = true
    })
    console.log(isFound)

    if (!isFound) {
        return phonebookList
    }
    return updatedList
}

function editContact(phonebookList, idx, newData) {
    const editedId = phonebookList[idx].id
    newData.id = editedId
    console.log(idx, newData)
    let data = axios
        .put(`${backendUrl}/${editedId}`, newData)
        .then((res) => res.data)

    return data
}