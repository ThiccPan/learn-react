import { useState } from 'react'
import './App.css'
import AnecdotesComponent from './AnecdoteComponent'

class feedbackModel {
	goodCount = 0
	neutralCount = 0
	badCount = 0
	totalCount = 0
	average = 0
}

function clickGood(feedback, setFeedback) {
	setFeedback({
		...feedback,
		goodCount: feedback.goodCount + 1,
		totalCount: feedback.totalCount + 1,
		average: feedback.average + 1,
	})
}

function clickNeutral(feedback, setFeedback) {
	setFeedback({
		...feedback,
		neutralCount: feedback.neutralCount + 1,
		totalCount: feedback.totalCount + 1
	})
}

function clickBad(feedback, setFeedback) {
	setFeedback({
		...feedback,
		badCount: feedback.badCount + 1,
		totalCount: feedback.totalCount + 1,
		average: feedback.average - 1,
	})
}

function getAverage(ave, total) {
	if (ave === 0 || total === 0) {
		return 0
	}

	return parseFloat(ave / total).toFixed(1)
}

function getPosAve(good, total) {
	console.log(good, total)
	if (good === 0 || total === 0) {
		return 0
	}

	return parseFloat(good / total).toFixed(1)
}

function App() {
	const [feedback, setFeedback] = useState(new feedbackModel());
	if (feedback.totalCount === 0) {
		return (
			<>
				<AnecdotesComponent />
				<h1>Give Feedback</h1>
				<span>
					<button onClick={() => clickGood(feedback, setFeedback)}>good</button>
					<button onClick={() => clickNeutral(feedback, setFeedback)}>neutral</button>
					<button onClick={() => clickBad(feedback, setFeedback)}>bad</button>
				</span>

				<h2>No feedback given</h2>
			</>
		)
	}

	return (
		<>
			<AnecdotesComponent />
			<h1>Give Feedback</h1>
			<span>
				<button onClick={() => clickGood(feedback, setFeedback)}>good</button>
				<button onClick={() => clickNeutral(feedback, setFeedback)}>neutral</button>
				<button onClick={() => clickBad(feedback, setFeedback)}>bad</button>
			</span>

			<h2>Stats</h2>
			<table>
				<tr>
					<th>Good:</th>
					<td>{feedback.goodCount}</td>
				</tr>
				<tr>
					<th>Neutral:</th>
					<td>{feedback.neutralCount}</td>
				</tr>
				<tr>
					<th>Bad:</th>
					<td>{feedback.badCount}</td>
				</tr>
				<tr>
					<th>Total:</th>
					<td>{feedback.totalCount}</td>
				</tr>
				<tr>
					<th>Average:</th>
					<td>{getAverage(feedback.average, feedback.totalCount)}</td>
				</tr>
				<tr>
					<th>Positive:</th>
					<td>{getPosAve(feedback.goodCount, feedback.totalCount)}%</td>
				</tr>
			</table>
		</>
	)
}

export default App
