import { useState } from 'react';
import './App.css'
import contact from './contact';
import ContactInfo from './components/ContactInfo';

let uid = 0
console.log("init")

function App() {
	const [phonebookList, setPhonebookList] = useState([])
	const [newContact, setNewContact] = useState(new contact)
	const [filter, setFilter] = useState('')

	const showedList = phonebookList.filter((contactItem) => contactItem.name.includes(filter))

	function onInputName(event) {
		const newContactIn = {
			...newContact,
			name: event.target.value
		}
		setNewContact(newContactIn)
		console.log(newContactIn)
	}

	function onInputNumber(event) {
		const newContactIn = {
			...newContact,
			number: event.target.value
		}
		setNewContact(newContactIn)
		console.log(newContactIn)
	}

	function onInputFilter(event) {
		setFilter(event.target.value)
	}

	function addContact() {
		// check if unique or not
		let isFound = phonebookList
			.findIndex((pb) =>
				pb.name == newContact.name
				|| pb.number == newContact.number)
				
		if (isFound > -1) {
			console.log("not unique")
			return;
		}

		const addedList = [...phonebookList, newContact]
		setPhonebookList(addedList);
		uid++;
		console.log(addedList)
	}

	return (
		<>
			<h1>Phonebook</h1>
			<div>
				name: <input type="text" onChange={onInputName} />
				<br />
				number: <input type="number" onChange={onInputNumber} />
				<br />
				<button onClick={addContact}>add</button>
			</div>

			<h2>Contact</h2>
			filter: <input type="text" onChange={onInputFilter} />
			<br />
			{showedList.map(
				(pbContact) => (
					<ContactInfo
						key={pbContact.id}
						contactData={pbContact}
					/>)
			)}
		</>
	)
}

export default App
