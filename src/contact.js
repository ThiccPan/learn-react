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

export function addContact(phonebookList, setPhonebookList, uid, newContact) {
    // check if unique or not
    let isFound = phonebookList
        .findIndex((pb) =>
            pb.name == newContact.name
            || pb.number == newContact.number)

    if (isFound > -1) {
        console.log("not unique")
        return;
    }

    newContact.id = uid
    uid++;

    axios.post(backendUrl, newContact)
        .then(res => {
            console.log(res)
        })

    const addedList = [...phonebookList, newContact]
    setPhonebookList(addedList);
    console.log(addedList)
}