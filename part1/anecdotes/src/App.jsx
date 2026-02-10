import { useState } from 'react';
import Button from './components/Button';

const App = () => {
  const [selected, setSelected] = useState(0);

    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const maxVotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(maxVotes);

  const vote = () => {
    setVotes(prev => {
      const copy = [...prev]
      copy[selected] += 1
      return copy
    });
  }
  

  const nextAnecdote = () => {
    if(selected === anecdotes.length - 1) {
      setSelected(0)
    } else {
      setSelected(s => s + 1);
    }
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div> {anecdotes[selected]}</div>
      <div> Has {votes[selected]} votes</div>
      <Button click={vote} text={'Vote'} />
      <Button click={nextAnecdote} text={'next anecdote'} />

      <h2>Anecdote with most votes</h2>
      {maxVotes === 0 ? (
        <p>No votes yet</p>
      ) : (
        <>
          <div>{anecdotes[mostVotedIndex]}</div>
          <div>Has {votes[mostVotedIndex]} votes</div>
        </>
      )}
    </>
  )
}

export default App
