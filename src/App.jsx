import { useEffect, useState } from 'react';
import './App.css'
import { contact, addContact } from './contact';
import ContactInfo from './components/ContactInfo';
import axios from 'axios';
import backendUrl from './constant';

let uid = 0
console.log("init")

function App() {
	const [phonebookList, setPhonebookList] = useState([])
	const [newContact, setNewContact] = useState(new contact)
	const [filter, setFilter] = useState('')

	useEffect(() => {
		console.log('inside callback')
		axios.get(backendUrl)
			.then((res) => {
				console.log(res.data)
				setPhonebookList(res.data)
				uid = res.data.at(-1).id + 1
			})
	}, [])

	const showedList = phonebookList.filter((contactItem) => contactItem.name.toLowerCase().includes(filter))

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
		setFilter(event.target.value.toLowerCase())
	}

	function onAddHandler() {
		addContact(phonebookList, setPhonebookList, uid, newContact)
	}

	function onDeleteHandler(name) {
		setPhonebookList(phonebookList.filter((pb) => pb.name != name))
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
