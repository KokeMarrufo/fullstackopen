import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [
    { part: part1.name, exercises : part1.exercises},
    { part: part2.name, exercises : part2.exercises},
    { part: part3.name, exercises : part3.exercises}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
