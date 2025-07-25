import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import History from "./components/History";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average - 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <Header title={"give feedback"} />
      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />
      <Header title={"statistics"} />
      <History
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
      />
    </div>
  );
};

export default App;
