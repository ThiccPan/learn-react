import { useState } from 'react';
import './App.css'
import PersonCard from "./PersonCard";
import Counter from './components/Counter.jsx';
import ArrayState from './components/ArrayState';

class Employee {
	constructor(name, age, departement) {
		this.name = name;
		this.age = age;
		this.departement = departement;
	}

	describe() {
		return this.name
	}
}

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
						<PersonCard
							person={person}
							setPerson={setPersonList}
							removeHandler={
								() => removePerson(
									personListState,
									person.id,
									setPersonList,
								)
							} />
					</li>
				)}
			</ul>
		</>
	)
}

export default App
