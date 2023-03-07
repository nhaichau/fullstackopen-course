import { useState } from 'react'

// const Statistics = (props) => {
//   const {good, neutral, bad, all, avg, positive, isFeedback} = props;

//     if(isFeedback) {
//       return (
//         <div>
//           <p>statistics</p>
//           <StatisticLine text="good" value={good} />
//           <StatisticLine text="neutral" value={neutral} />
//           <StatisticLine text="bad" value={bad} />
//           <StatisticLine text="all" value={all} />
//           <StatisticLine text="avg" value={avg} />
//           <StatisticLine text="positive" value={positive} />
//         </div>
//       );
//     }
//     return (
//       <div>
//         <p>No feedback given</p>
//       </div>
//     )    
// }

const Statistics = (props) => {
  const {good, neutral, bad, all, avg, positive, isFeedback} = props;

    if(isFeedback) {
      return (
        <div>
          <p>statistics</p>
          <table>
            <tbody>
              <TableRow text="good" value={good} />
              <TableRow text="neutral" value={neutral} />
              <TableRow text="bad" value={bad} />
              <TableRow text="all" value={all} />
              <TableRow text="average" value={avg} />
              <TableRow text="positive" value={positive} />
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )    
}


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
 
}

// const StatisticLine = (props) => {
//   return (
//     <p>{props.text} {props.value}</p>
//   )
// }

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);
  const [isFeedback, setFeedback] = useState(false);
  
  console.log('current good: ', positive);
  const goodHandler = () => {
    console.log('before clicking good: ', good);
    let newGood = good + 1;
    setGood(newGood);
    setFeedback(true);
    setAll(all + 1)
    let newAll = all + 1;
    console.log('total click: ', newAll);
    let newScore = score + 1;
    setScore(newScore);
    setAvg(newScore/newAll);
    setPositive(newGood*100/newAll);
  }

  const neutralHandler = () => {
    setNeutral(neutral + 1);
    setFeedback(true);
    setAll(all + 1);
    let newAll = all + 1;
    console.log('total click: ', newAll);
    let newScore = score + 0;
    setScore(newScore);
    setAvg(newScore/newAll);
    setPositive(good*100/newAll);
  }

  const badHandler = () => {
    setBad(bad + 1);
    setFeedback(true);
    setAll(all + 1);
    let newAll = all + 1;
    let newScore = score - 1;
    setScore(newScore);
    setAvg(newScore/newAll);
    setPositive(good*100/newAll);
  }

  return (
    <div>
      <p>give feedback</p>
      {/* <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button> */}
      <Button handleClick={goodHandler} text="good" />
      <Button handleClick={neutralHandler} text="neutral" />
      <Button handleClick={badHandler} text="bad" />
      <br />
      {/* <p>statistics</p>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {avg}</p>
      <p>postive {positive}%</p> */}

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all} 
        avg={avg} 
        positive={positive} 
        isFeedback={isFeedback}
      />

      {/* <p>statistics</p>
      <table>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{avg}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive}</td>
        </tr>
      </table> */}

    </div>
  )
}

export default App

