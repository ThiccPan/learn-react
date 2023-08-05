import { useState } from 'react';
import './App.css'
import Note from './components/Note';

function App({notes}) {
	return (
		<>
			{notes.map(note => <Note key={note.id} note={note} />)}
		</>
	)
}

export default App
