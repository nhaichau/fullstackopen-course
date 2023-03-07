import { useState } from 'react'

const App = () => {
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
  
  let initialVotes = []
  for (let i = 0; i < anecdotes.length; i++) {
    initialVotes.push(0)
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)
  const [maxVoteIndex, setMaxVoteIndex] = useState(0)

  const acnecdotesHandler = () => {
    const newSelected = Math.abs(Math.floor(Math.random()*(anecdotes.length)))
    console.log(newSelected)
    setSelected(newSelected)
  }

  const indexOfMaxArrValue = (Arr) => {
    let maxValue = 0
    let indexOfMaxValue
    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i] >= maxValue) {
        maxValue = Arr[i]
        indexOfMaxValue = i
      } 
    }
    return indexOfMaxValue
  }

  const votesHandler = () => {
    const newVotes = votes.map((voteCount,index) => {
      if (index === selected) {
        return voteCount += 1
      } else {
        return voteCount
      }   
    })
    console.log(newVotes)

    const newMaxVoteIndex = indexOfMaxArrValue(newVotes)
    console.log(newMaxVoteIndex)
    
    setVotes(newVotes)
    setMaxVoteIndex(newMaxVoteIndex)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={votesHandler}>vote</button>
      <button onClick={acnecdotesHandler}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxVoteIndex]}</p>
    </div>
  )
}

export default App
