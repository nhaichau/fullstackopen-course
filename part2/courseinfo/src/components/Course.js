import Header from "./Header"
import Content from "./Content"

const Course = (props) => {
  const total = props.course.parts.reduce((sumExercises, currentPart) => {
    return sumExercises + currentPart.exercises
  }, 0,)

  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <p>total of {total} exercises</p> 
    </div>
  )
}

export default Course