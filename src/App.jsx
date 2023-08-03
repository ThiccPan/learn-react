import { useState } from 'react';
import './App.css'
import Counter from './components/Counter.jsx';
import ArrayState from './components/ArrayState';
import Note from './components/Note';
import { personList, addPerson, removePerson, editPerson } from './Person'

function App() {
	const [personListState, setPersonList] = useState(personList)
	const [newPerson, setNewPerson] = useState({})

	const handlePersonChange = (event) => {
		console.log(event.target.value)
		setNewPerson({
			name: event.target.value,
		})
	}

	const onAddEvent = () => {
		setPersonList(
			addPerson(
				personListState,
				newPerson.name
			)
		)

		console.log(personListState)
	}

	return (
		<>
			<span>
				<input type="text" name="" id="" onChange={handlePersonChange} />
				<button onClick={onAddEvent}>add person</button>
			</span>
			<button
				onClick={() => editPerson(
					personList,
					1,
					setPersonList
				)}>
				add salary
			</button>

			<ul>
				{personListState.map(person =>
					<li key={person.id}>
						{person.name}
					</li>
				)}
			</ul>

			<Note />
		</>
	)
}

export default App
