import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
	const notes = response.data
	console.log(notes)
	ReactDOM
		.createRoot(document.getElementById('root'))
		.render(<App notes={notes} />)
})

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// )
