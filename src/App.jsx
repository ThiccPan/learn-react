import { useState } from 'react';
import './App.css'
import contact from './contact';
import ContactInfo from './components/ContactInfo';

let uid = 0
console.log("init")

function App() {
	const [phonebookList, setPhonebookList] = useState([])
	const [newContact, setNewContact] = useState(new contact)
	const [filter, setFilter] = useState('item')

	const showedList = phonebookList.filter((contactItem) => contactItem.name.includes(filter))

	function onInputContact(event) {
		console.log(event.target.value)
		setNewContact(
			new contact(uid, event.target.value, 0)
		)
		console.log(newContact)
	}

	function onInputFilter(event) {
		setFilter(event.target.value)
	}

	function addContact() {
		const addedList = [...phonebookList, newContact]
		setPhonebookList(addedList);
		uid++;
		console.log(addedList)
	}

	return (
		<>
			<h1>Phonebook</h1>
			name: <input type="text" onChange={onInputContact} />
			<br />
			<button onClick={addContact}>add</button>

			<h2>Contact</h2>
			filter: <input type="text" onChange={onInputFilter}/>
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
