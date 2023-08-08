import { useEffect, useState } from 'react';
import './App.css'
import contactService from './contact';
import ContactInfo from './components/ContactInfo';

let uid = 0
console.log("init")

function App() {
	const [phonebookList, setPhonebookList] = useState([])
	const [newContact, setNewContact] = useState(new contactService.contact)
	const [listFilter, setFilter] = useState('')

	useEffect(() => {
		console.log('inside callback')
		contactService.getAll().then(data => setPhonebookList(data))
	}, [])

	const showedList = phonebookList.filter((contactItem) => contactItem.name.toLowerCase().includes(listFilter))

	function onInputName(event) {
		const newContactIn = { ...newContact, name: event.target.value }
		setNewContact(newContactIn)
		console.log(newContactIn)
	}

	function onInputNumber(event) {
		const newContactIn = { ...newContact, number: event.target.value }
		setNewContact(newContactIn)
		console.log(newContactIn)
	}

	function onInputFilter(event) {
		setFilter(event.target.value.toLowerCase())
	}

	function onAddHandler() {
		let isFound = phonebookList.find((pb) => pb.name == newContact.name);

		if (isFound !== undefined) {
			if (window.confirm(`contact with the name ${isFound.name} detected, edit number?`)) {
			newContact.id = isFound.id;
			onEditHandler(newContact);
			return
			}
		}

		contactService.addContact(uid, newContact)
			.then(data => setPhonebookList([...phonebookList, data]))
	}

	function onEditHandler(newContact) {
		console.log("not unique")
		contactService.editContact(newContact)
			.then(
				contactService
					.getAll()
					.then((data) => setPhonebookList(data))
			)
	}

	function onDeleteHandler(id) {
		setPhonebookList(contactService.deleteContact(phonebookList, id))
	}

	return (
		<>
			<h1>Phonebook</h1>
			<div>
				name: <input type="text" onChange={onInputName} />
				<br />
				number: <input type="number" onChange={onInputNumber} />
				<br />
				<button onClick={onAddHandler}>add</button>
			</div>

			<h2>Contact</h2>
			filter: <input type="text" onChange={onInputFilter} />
			<br />
			{showedList.map(
				(pbContact) => (
					<ContactInfo
						key={pbContact.id}
						contactData={pbContact}
						onDelete={onDeleteHandler}
					/>)
			)}
		</>
	)
}

export default App
