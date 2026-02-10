import { useState } from 'react';
import Statistics from './Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
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

  return (
    <>
      <h1><b>Give Feedback</b></h1>
      <button onClick={() => giveFeedback('good')}> good </button>
      <button onClick={() => giveFeedback('neutral')}> neutral </button>
      <button onClick={() => giveFeedback('bad')}> bad </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
