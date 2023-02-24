const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// const Content = (props) => {
//   return (
//     <div>
//       <p>{props.part} {props.execise}</p>
//     </div>
//   )
// }
const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.execise}</p>
    </div>
  )
}

const Content = (props) => {
  console.log('value of props of Content is: ', props)
  return (
    <div>
      <Part part={props.part1} execise={props.exercise1} />
      <Part part={props.part2} execise={props.exercise2} />
      <Part part={props.part3} execise={props.exercise3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercise1={exercises1} 
        part2={part2} exercise2={exercises2}
        part3={part3} exercise3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      
    </div>
  )
}

export default App
