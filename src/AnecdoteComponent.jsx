import { useState } from 'react'

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
]

const randomToNine = (setNumber) => {
    let genNum = Math.random()
        .toFixed(1)
        * 10
    if (genNum >= 8) genNum = 0
    setNumber(genNum)
}

const clickVote = (voteQty, idx, setVoteQty) => {
    const newVoteQty = {
        ...voteQty
    }
    newVoteQty.votes[idx]+=1
    if (newVoteQty.votes[idx] > newVoteQty.votes[newVoteQty.mostVoted]) {
        newVoteQty.mostVoted = idx
    }
    setVoteQty(newVoteQty)
    console.log(voteQty)
}

const AnecdotesComponent = () => {
    const [number, setNumber] = useState(0)
    const [voteQty, setVoteQty] = useState({
        votes: [0, 0, 0, 0, 0, 0, 0, 0],
        mostVoted: 0
    })

    return (
        <>
            <h3>{anecdotes[number]}</h3>
            <button onClick={() => randomToNine(setNumber)}>next</button>
            <h3>Vote count: {voteQty.votes[number]}</h3>
            <button onClick={() => clickVote(voteQty, number, setVoteQty)}>vote</button>
            <h3>Most vote: {anecdotes[voteQty.mostVoted]}</h3>
            <p>quantity: {voteQty.votes[voteQty.mostVoted]}</p>
        </>
    )
}

export default AnecdotesComponent