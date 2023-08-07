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

export async function getAll() {
    let res = axios.get(backendUrl).catch(err => console.log(err))
    const res_1 = await res;
    return res_1.data;
}

export async function addContact(uid, newContact) {
    newContact.id = uid
    uid++;

    let res = await axios.post(backendUrl, newContact)
        .catch(err => console.log(err))
        
    console.log(res.data)
    return res.data;
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

export async function editContact(editData) {
    console.log(editData)
    // return
    let res = await axios
        .put(`${backendUrl}/${editData.id}`, editData)
        .catch(err => console.log(err))

    const data = await res.data;
    return data;
}

export default {
    contact,
    getAll,
    addContact,
    deleteContact,
    editContact
}