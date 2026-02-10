import { useState } from 'react';
import Statistics from './Statistics';
import Button from './components/Button';

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
      <Button click={() => giveFeedback('good')} text={'good'} />
      <Button click={() => giveFeedback('neutral')} text={'neutral'} />
      <Button click={() => giveFeedback('bad')} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
