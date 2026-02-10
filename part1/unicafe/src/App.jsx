import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100
  
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
    }

  }

  return (
    <>
      <h1><b>Give Feedback</b></h1>
      <button onClick={() => giveFeedback('good')}> good </button>
      <button onClick={() => giveFeedback('neutral')}> neutral </button>
      <button onClick={() => giveFeedback('bad')}> bad </button>
      <h2>Statistics</h2>
      <p>
        good {good}
      </p>
      <p>
        neutral {neutral}
      </p>
      <p>
        bad {bad}
      </p>
      <p> all {all}</p>
      <p> Average {average}</p>
      <p>positive {positive}% </p>
    </>
  )
}

export default App
