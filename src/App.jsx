import { useState } from 'react';
import './App.css'
import Counter from './components/Counter.jsx';
import ArrayState from './components/ArrayState';
import Note from './components/Note';
import {personList, removePerson, editPerson} from './Person'

function App() {
	const [personListState, setPersonList] = useState(personList)

	return (
		<>
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

			<Note/>
		</>
	)
}

export default App
