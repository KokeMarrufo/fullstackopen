import { useState } from 'react';
import Statistics from './Statistics';
import Button from './components/Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
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


  const vote = () => {
    setVotes(prev => {
      const copy = [...prev]
      copy[selected] += 1
      return copy
    })
  }
   
  
  const giveFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(g => g + 1)
        break;
      case 'neutral':
        setNeutral(n => n + 1);
        break;
      case 'bad':
        setBad(b => b + 1);
        break;
      default:
        break;
    }

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
      <h1><b>Give Feedback</b></h1>
      <Button click={() => giveFeedback('good')} text={'good'} />
      <Button click={() => giveFeedback('neutral')} text={'neutral'} />
      <Button click={() => giveFeedback('bad')} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>

      <div> {anecdotes[selected]}</div>
      <div> Has {votes[selected]} votes</div>
      <Button click={vote} text={'Vote'} />
      <Button click={nextAnecdote} text={'next anecdote'} />
    </>
  )
}

export default App
