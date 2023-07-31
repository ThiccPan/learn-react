import { useState } from 'react';
import './App.css'
import PersonCard from "./PersonCard";
import Counter from './Counter.jsx';

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
		name: "person 1",
		age: 12
	},
	{
		name: "person 2",
		age: 14
	}
]

const manager = {
	name: "name",
	greet: () => ("manager says hello")
}

manager.manageEmployee = (employeeName) => {
	console.log(employeeName, "is being managed")
}

function App() {
	const [counter, setcounter] = useState(0)

	console.log(manager.greet())
	console.log(manager.manageEmployee("person 1"))
	const employee1 = new Employee("employee 1", 12, "IT");
	console.log("employee name: ", employee1.describe())

	return (
		<>
			<h1>Hi there</h1>
			<PersonCard name={personList[0].name} age={personList[0].age} />
			{/* <PersonCard name={personList[1].name} age={personList[1].age} /> */}
			<Counter count={counter} setCounter={setcounter}/>
		</>
	)
}

export default App
