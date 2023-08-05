import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
	const [notes, setNotes] = useState([])
	useEffect(() => {
		console.log('effect')
		axios
			.get('http://localhost:3001/notes')
			.then((res) => {
				console.log(res.data)
				setNotes(res.data)
			})
	}, [])
	console.log(notes[0])

	return !notes.length > '' ? 0 : (
		<>
			<h1>a</h1>
			<p>{notes[0].content}</p>
		</>
	)
}

export default App