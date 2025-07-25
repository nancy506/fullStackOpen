import Statistics from "./Statistics";


const History = ({ good, neutral, bad, all, average }) => {
  if (all === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return (
    <div>
     <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
      />
    </div>
  )
};

export default History;
